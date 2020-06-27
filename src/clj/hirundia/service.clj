(ns hirundia.service
  (:require
   [clojure.core.async :as async :refer [go >!]]
   [clojure.spec.alpha :as spec]
   [com.grzm.component.pedestal :as pedestal-component]
   [io.pedestal.http :as http]
   [io.pedestal.http.route :as route]
   [io.pedestal.http.body-params :as body-params]
   [io.pedestal.interceptor :as interceptor]
   [io.pedestal.interceptor.chain :as interceptor-chain]
   [io.pedestal.interceptor.error :refer [error-dispatch]]
   [io.pedestal.http.ring-middlewares :as ring-middlewares]
   [io.pedestal.http.jetty.websockets :as ws]
   [ring.util.response :as ring-resp]
   [hirundia.coerce :as coerce]
   [hirundia.services.nests.retrieve.endpoint :as nests.retrieve]
   [hirundia.services.nests.retrieveall.endpoint :as nests.retrieveall]
   [hirundia.services.session.admin.endpoint :as admin-dashboard.retrieveall]
   [hirundia.services.nests.update.endpoint :as nests.update]
   [hirundia.services.nests.insert.endpoint :as nests.insert]
   [hirundia.services.nests.delete.endpoint :as nests.delete]
   [hirundia.services.session.register.endpoint :as session.register]
   [hirundia.services.session.login.endpoint :as session.login]
   [hirundia.services.viz.geo.endpoint :as viz.geo]
   [hirundia.views :as views]
   [hirundia.models.user :as models.user]
   [ring.middleware.session.cookie :as cookie]
   [ring.middleware.session.store :as session.store]
   [ring.middleware.flash :as flash]
   [buddy.auth.middleware :refer [authentication-request] :as auth.middleware]
   [buddy.auth.backends.session :refer [session-backend]]
   [buddy.auth.backends :as auth.backends]
   [buddy.auth :refer [authenticated?] :as auth]))

(defn home-page [request]
  (ring-resp/response (views/home request)))

(defn retrieve-page [request]
  (ring-resp/response (nests.retrieve/perform request)))

(defn insert-nest-page [request]
  (if (authenticated? (:session request))
    (ring-resp/response (views/insert-entry request))
    (-> (ring-resp/redirect "/login")
        (assoc :flash "Login in order to add an entry"))))

(defn register-page [request]
  (ring-resp/response (views/register request)))

(defn login-page [request]
  (ring-resp/response (views/login request)))

(defn logout [request]
  (-> (ring-resp/redirect "/login")
      (assoc-in [:session :identity] nil)
      (assoc :flash "You have logged out")))

(defn greet-page [request]
  (ring-resp/response (views/greet request)))

(defn dashboard-page [request]
  (ring-resp/response (views/dashboard request)))

(defn new-app-page [request]
  (ring-resp/response (views/new-app request)))

(defn form-page [request]
  (ring-resp/response (views/form request)))
;;;--------------------
;;;auth interceptor
;;;--------------------
(def session-auth-backend
  (auth.backends/session))

(def authentication-interceptor
  "Port of buddy-auth's wrap-authentication middleware."
  (interceptor/interceptor
   {:name ::authenticate
    :enter (fn [context]
             (let [session (get-in context [:request :session])]
               (if (authenticated? session)
                 (update context :request authentication-request session-auth-backend)
                 (-> context
                     (assoc :response {:status 401
                                       :body   "must login for that..."})
                     interceptor-chain/terminate))))}))

(def admin-interceptor
  "throw unautherized 403 by role (allows admin only)"
  {:name ::admin-interceptor
   :enter (fn [context]
            (let [role (get-in context [:request :session :identity :role])]
              (if (= role models.user/admin-role)
                context
                (-> context
                    (assoc :response {:status 403
                                      :body   "Unauthorized"})
                    interceptor-chain/terminate))))})

(defn author-interceptor [author-fn]
  "throw unauthorized 403 by author
  (allows admin and author of entry)"
  {:name ::author-interceptor
   :enter (fn [context]
            (let [role     (get-in context [:request :session :identity :role])
                  username (get-in context [:request :session :identity :username])
                  id       (get-in context [:request :path-params :id])
                  db       (get-in context [:request :db])
                  author (author-fn (:request context))]
              (if (or (= role models.user/admin-role) (= username author))
                context
                (-> context
                    (assoc :response {:status 403
                                      :body "only permitted to author and admin"})
                    interceptor-chain/terminate))))})

;;;;;;;;;;;;;;;;;;;

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

(defn make-session-store
  [reader writer deleter]
  (reify session.store/SessionStore
    (read-session [_ k] (reader k))
    (write-session [_ k s] (writer k s))
    (delete-session [_ k] (deleter k))))

(def flash-interceptor (ring-middlewares/flash))

(def components-to-inject [:db
                           #_:background-processor #_:enqueuer])

(def component-interceptors
  (conj (mapv pedestal-component/using-component components-to-inject)
        (context-injector components-to-inject)))

(def common-interceptors (into component-interceptors [(body-params/body-params) http/html-body flash-interceptor]))

(def routes
  "Tabular routes"
  #{["/" :get (conj common-interceptors `home-page) :route-name :home]
    #_["/about" :get (conj common-interceptors `about-page)]
    ["/register" :get (conj common-interceptors `register-page) :route-name :register]
    ["/register" :post (conj common-interceptors `session.register/perform)]
    ["/register/:id" :get (into common-interceptors [http/json-body (param-spec-interceptor ::session.register/email-api :path-params) `session.register/complete])]
    ["/login" :get (conj common-interceptors `login-page) :route-name :login]
    ["/login" :post (conj common-interceptors `session.login/perform)]
    ["/login-mobile" :post (into common-interceptors [http/json-body `session.login/perform-mobile])]
    ["/logout" :get (conj common-interceptors `logout)]
    ["/greet" :get (conj common-interceptors `greet-page)]
    ["/nests" :get  (conj common-interceptors `nests.retrieveall/perform) :route-name :nests]
    ["/nests-update/:id" :post (into common-interceptors [http/json-body (param-spec-interceptor ::nests.update/api :form-params) `nests.update/perform])]
    ["/nests/:id" :get (into common-interceptors [http/json-body (param-spec-interceptor ::nests.retrieve/api :path-params) (author-interceptor nests.retrieve/get-author) `nests.retrieve/perform]) :route-name :nests/:id]
    #_["/nests-insert" :get (into common-interceptors [http/json-body  `insert-nest-page])]
    #_["/nests-insert" :post (into common-interceptors [http/json-body authentication-interceptor (param-spec-interceptor ::nests.insert/api :form-params) `nests.insert/perform])]
    ["/nests-delete/:id" :get (into common-interceptors [http/json-body authentication-interceptor admin-interceptor (param-spec-interceptor ::nests.delete/api :path-params) `nests.delete/perform]) :route-name :nests-delete/:id]
    ["/dashboard" :get (conj common-interceptors `new-app-page)]
    ["/admin-dashboard" :get (into common-interceptors [admin-interceptor `admin-dashboard.retrieveall/perform]) :route-name :admin-dashboard]
    ["/nests-insert" :get (into common-interceptors [http/json-body `form-page])]
    ["/nests-insert" :post (into common-interceptors [http/json-body authentication-interceptor (param-spec-interceptor ::nests.insert/api :form-params) `nests.insert/perform])]
    ["/transit" :get  (into common-interceptors [http/json-body `nests.retrieveall/to-cljs])]
    ["/osm" :get (conj common-interceptors `views/osm-page)]})

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
   ::http/port              (Integer. (or (System/getenv "PORT") "8080"))
   ;; Options to pass to the container (Jetty)
   ::http/container-options {:h2c? true
                             :h2?  false

                             ;; :keystore "test/hp/keystore.jks"
                             ;; :key-password "password"
                             ;; :ssl-port 8443
                             :ssl? false}})
