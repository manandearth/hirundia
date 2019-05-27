(ns hirundia.server
  (:gen-class)
  (:require
   [com.stuartsierra.component :as component]
   [io.pedestal.http :as server]
   [io.pedestal.http.route :as route]
   [io.pedestal.http :as http]
   [modular.postgres]
   [hirundia.service :as service]
   [hirundia.figwheel]
   [com.grzm.component.pedestal :as pedestal-component]
   [ring.middleware.session.cookie :as cookie]))

(def dev-http-port 8080)
(def test-http-port 59800)

(defn env [name]
  {:post [(seq %)]}
  (System/getenv name))

(def dev-map
  (-> service/service ;; start with production configuration
      (merge {:env                     :dev
              ;; do not block thread that starts web server
              ::server/join?           false
              ;; Routes can be a function that resolve routes,
              ;;  we can use this to set the routes to be reloadable
              ::server/routes          #(route/expand-routes (deref #'service/routes))
              ;; all origins are allowed in dev mode
              ::server/allowed-origins {:creds true :allowed-origins any?}
              ;; Content Security Policy (CSP) is mostly turned off in dev mode
              ::server/secure-headers  {:content-security-policy-settings {:object-src "none"}}
              ::http/enable-session {:store (cookie/cookie-store)}})
      server/default-interceptors
      server/dev-interceptors))

(defn production-system []
  (let [production-map (-> service/service
                           (merge {:env :production
                                   ::http/enable-session {:store (cookie/cookie-store)}
                                   ::server/secure-headers  {:content-security-policy-settings {:object-src "none"}}})
                           (server/default-interceptors))]
    (component/system-map
     :service-map production-map
     :db (modular.postgres/map->Postgres {:url "jdbc:postgresql:hirundia_dev"
                                          :user (env "MANANDEARTH_HIRUNDIA_USER")
                                          :password (env "MANANDEARTH_HIRUNDIA_PASSWORD")})
     :pedestal (component/using (pedestal-component/pedestal (constantly production-map))
                                service/components-to-inject))))

(defn -main
  "The entry-point for 'lein run'"
  [& args]
  (println "\nCreating your server...")
  (-> (production-system) (component/start)))

(defn test?
  [service-map]
  (-> service-map :env #{:test}))

(defrecord Pedestal [service-map service]
  component/Lifecycle
  (start [this]
    (if service
      this
      (cond-> service-map
        true                      server/create-server
        (not (test? service-map)) server/start
        true                      ((partial assoc this :service)))))

  (stop [this]
    (when (and service (not (test? service-map)))
      (server/stop service))
    (dissoc this :service)))
