(ns hirundia.service
  (:require
   [clojure.core.async :as async :refer [go >!]]
   [clojure.spec.alpha :as spec]
   [com.grzm.component.pedestal :as pedestal-component]
   [io.pedestal.http :as http]
   [io.pedestal.http.route :as route]
   [io.pedestal.http.body-params :as body-params]
   [io.pedestal.interceptor.chain :as interceptor-chain]
   [io.pedestal.http.ring-middlewares :as ring-middlewares]
   [ring.util.response :as ring-resp]
   [hirundia.coerce :as coerce]
   [hirundia.services.nests.retrieve.endpoint :as nests.retrieve]
   [hirundia.services.nests.retrieveall.endpoint :as nests.retrieveall]
   [hirundia.services.nests.update.endpoint :as nests.update]
   [hirundia.services.nests.insert.endpoint :as nests.insert]
   [hirundia.services.nests.delete.endpoint :as nests.delete]
   [hirundia.services.session.register.endpoint :as session.register]
   [hirundia.views :as views]
   [ring.middleware.session.cookie :as cookie]
   [ring.middleware.flash :as flash]))

(defn about [request]
  (->> (route/url-for ::about-page)
       (format "Clojure %s - served from %s"
               (clojure-version))
       ring-resp/response))

(defn about-page [request]
  (ring-resp/response  (views/about)))

(defn home-page [request]
  (ring-resp/response (views/home)))

(defn retrieve-page [request]
  (ring-resp/response (nests.retrieve/perform request)))

(defn insert-nest-page [request]
  (ring-resp/response (views/insert-entry)))

(defn register-page [request]
  (ring-resp/response (views/register request)))

(defn login-page [request]
  (ring-resp/response (views/login request)))

;; (spec/def ::temperature int?)

;; (spec/def ::orientation (spec/and keyword? #{:north :south :east :west}))

;; (spec/def ::api (spec/keys :req-un [::temperature ::orientation]))

;; (defn api [{{:keys [temperature orientation]} :query-params :keys [db] :as request}]
  #_(go
    (-> enqueuer :channel (>! (hirundia.jobs.sample/new temperature))))
  ;; {:status 200
  ;;  :body   {:temperature temperature :orientation orientation}})



(defn param-spec-interceptor
  "Coerces params according to a spec. If invalid, aborts the interceptor-chain with 422, explaining the issue."
  [spec params-key]
  {:name  ::param-spec-interceptor
   :enter (fn [context]
            (let [result (coerce/coerce-map-indicating-invalidity spec (get-in context [:request params-key]))]
              (if (contains? result ::coerce/invalid?)
                (-> context
                    (assoc :response {:status 422
                                      :body   {:explanation (spec/explain-str spec result)}})
                    interceptor-chain/terminate)
                (assoc-in context [:request params-key] result))))})

(defn context-injector [components]
  {:enter (fn [{:keys [request] :as context}]
            (reduce (fn [v component]
                      (assoc-in v [:request component] (pedestal-component/use-component request component)))
                    context
                    components))
   :name  ::context-injector})

(def session-interceptor (ring-middlewares/session {:store (cookie/cookie-store)}))

(def flash-interceptor (ring-middlewares/flash))


(def components-to-inject [:db
                           #_:background-processor #_:enqueuer
                           ])

(def component-interceptors
  (conj (mapv pedestal-component/using-component components-to-inject)
        (context-injector components-to-inject)))

(def common-interceptors (into component-interceptors [(body-params/body-params) http/html-body session-interceptor flash-interceptor]))

(def routes
  "Tabular routes"
  #{["/" :get (conj common-interceptors `home-page) :route-name :home]
    ["/about" :get (conj common-interceptors `about-page)]
    ["/register" :get (conj common-interceptors `register-page)]
    ["/register" :post (conj common-interceptors `session.register/perform)]
    ["/login" :get (conj common-interceptors `login-page)]
    ;; ["/api" :get (into component-interceptors [http/json-body (param-spec-interceptor ::api :query-params) `api])]
    ;; ["/invoices/insert" :get (into component-interceptors [http/json-body (param-spec-interceptor ::invoices.insert/api :query-params) `invoices.insert/perform])]
    ;; ["/invoices/:id" :get (into component-interceptors [http/json-body (param-spec-interceptor ::invoices.retrieve/api :path-params) `invoices.retrieve/perform])]
    ;; ["/invoices/delete" :get (into component-interceptors [http/json-body `invoices.delete/perform])]
    ["/nests" :get  (conj common-interceptors `nests.retrieveall/perform)]
    ["/nests-update/:id" :post (into common-interceptors [http/json-body #_(param-spec-interceptor ::nests.update/api :form-params) `nests.update/perform])]
    ["/nests/:id" :get (conj common-interceptors (param-spec-interceptor ::nests.retrieve/api :path-params) `nests.retrieve/perform)]
    ["/nests-insert" :get (into common-interceptors [http/json-body `insert-nest-page])]
    ["/nests-insert" :post (into common-interceptors [http/json-body `nests.insert/perform])]
["/nests-delete/:id" :get (into common-interceptors [http/json-body (param-spec-interceptor ::nests.delete/api :path-params) `nests.delete/perform]) :route-name :nests-delete/:id]
    })

(comment
  (def routes
    "Map-based routes"
    `{"/" {:interceptors [(body-params/body-params) http/html-body]
           :get          home-page
           "/about"      {:get about-page}}})
  (def routes
    "Terse/Vector-based routes"
    `[[["/" {:get home-page}
        ^:interceptors [(body-params/body-params) http/html-body]
        ["/about" {:get about-page}]]]]))

;; Consumed by hirundia.server/create-server
;; See http/default-interceptors for additional options you can configure
(def service
  {:env                     :prod
   ;; You can bring your own non-default interceptors. Make
   ;; sure you include routing and set it up right for
   ;; dev-mode. If you do, many other keys for configuring
   ;; default interceptors will be ignored.
   ;; ::http/interceptors []
   ::http/routes            routes
   ;; Uncomment next line to enable CORS support, add
   ;; string(s) specifying scheme, host and port for
   ;; allowed source(s):
   ;;
   ;; "http://localhost:8080"
   ;;
   ;; ::http/allowed-origins ["scheme://host:port"]

   ;; Tune the Secure Headers
   ;; and specifically the Content Security Policy appropriate to your service/application
   ;; For more information, see: https://content-security-policy.com/
   ;;   See also: https://github.com/pedestal/pedestal/issues/499
   ;; ::http/secure-headers {:content-security-policy-settings {:object-src "'none'"
   ;; :script-src "'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:"
   ;; :frame-ancestors "'none'"}}

   ;; Root for resource interceptor that is available by default.
   ::http/resource-path     "/public"

   ;; Either :jetty, :immutant or :tomcat (see comments in project.clj)
   ;; This can also be your own chain provider/server-fn -- http://pedestal.io/reference/architecture-overview#_chain_provider
   ::http/type              :jetty
   ;; ::http/host "localhost"
   ::http/port              8080
   ;; Options to pass to the container (Jetty)
   ::http/container-options {:h2c? true
                             :h2?  false
                             ;; :keystore "test/hp/keystore.jks"
                             ;; :key-password "password"
                             ;; :ssl-port 8443
                             :ssl? false}})
