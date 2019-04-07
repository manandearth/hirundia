(ns user
  "Tools for interactive development with the REPL. This file should
  not be included in a production build of the application.

  Call `(reset)` to reload modified code and (re)start the system.

  The system under development is `system`, referred from
  `com.stuartsierra.component.repl/system`.

  See also https://github.com/stuartsierra/component.repl"
  (:require
   [clojure.java.io :as io]
   [clojure.pprint :refer [pprint]]
   [clojure.set :as set]
   [clojure.string :as string]
   [com.grzm.component.pedestal :as pedestal-component]
   [com.stuartsierra.component :as component]
   [com.stuartsierra.component.repl :refer [reset set-init system]]
   [modular.postgres]
   #_ [duct.component.figwheel :as figwheel]
   #_ [background-processing.background-processor :as background-processor]
   #_ [background-processing.enqueuer :as enqueuer]
   [io.pedestal.test :refer [response-for]]
   [io.pedestal.http :as http]
   [io.pedestal.http.route :as route]
   [io.pedestal.http.route.definition.table :refer [table-routes]]
   [figwheel-sidecar.repl-api :as figwheel]
   [hirundia.server]
   [hirundia.service]))

#_(def figwheel
  (figwheel/server
   {:css-dirs ["resources/public/css"]
    :cljsbuild {:builds
                  [{:source-paths ["src/cljs"]
                    :build-options
                    {:output-to     "target/figwheel/public/main.js"
                     :output-dir    "target/figwheel/public"
                     :optimizations :none}}]}}))

(def figwheel-config
  {:figwheel-options {} ;; <-- figwheel server config goes here 
    :build-ids ["dev"]   ;; <-- a vector of build ids to start autobuilding
    :all-builds          ;; <-- supply your build configs here
    [{:id "dev"
      :figwheel true
      :source-paths ["src/cljs"]
      :compiler {:main "hirundia.core"
                 ;:asset-path "/out"
                 :output-to "resources/public/js/compiled/app.js"
                 :output-dir "resources/public/js/compiled/out"
                 :asset-path "js/compiled/out"
                 :optimizations :none
                 :pretty-print true}}]})

(defrecord Figwheel []
  component/Lifecycle
  (start [config]
    (figwheel/start-figwheel! config)
    config)
  (stop [config]
    ;; you may want to restart other components but not Figwheel
    ;; consider commenting out this next line if that is the case
    (figwheel/stop-figwheel!)
    config))


(defn dev-system
  []
  (component/system-map
   :service-map hirundia.server/dev-map
   ;; :background-processor (background-processor/new :queue-name "cljtest")
   ;; :enqueuer (enqueuer/new :queue-name "cljtest")
   :db (modular.postgres/map->Postgres {:url "jdbc:postgresql:postgres" :user "postgres" :password "postgres"})
   :pedestal (component/using (pedestal-component/pedestal (constantly hirundia.server/dev-map))
                              hirundia.service/components-to-inject)
   :figwheel (map->Figwheel figwheel-config)
   ))

(set-init (fn [_]
            (dev-system)))

;;response-for urls

(defn service-fn
  [sys]
  (get-in sys [:pedestal :server ::http/service-fn]))

(defn comp-response-for [verb route]
  (let [service (service-fn system)]
    (response-for service verb route)))


;;printing routes and interceptors
(defn print-routes
  "Print our application's routes"
  []
  (route/print-routes (table-routes hirundia.service/routes)))

(defn named-route
  "Finds a route by name"
  [route-name]
  (->> hirundia.service/routes
       table-routes
       (filter #(= route-name (:route-name %)))
       first))

(defn print-route
  "Prints a route and its interceptors"
  [rname]
  (letfn [(joined-by
            [s coll]
            (apply str (interpose s coll)))

          (repeat-str
            [s n]
            (apply str (repeat n s)))

          (interceptor-info
            [i]
            (let [iname  (or (:name i) "<handler>")
                  stages (joined-by
                          ","
                          (keys
                           (filter
                            (comp (complement nil?) val)
                            (dissoc i :name))))]
              (str iname " (" stages ")")))]
    (when-let [rte (named-route rname)]
      (let [{:keys [path method route-name interceptors]} rte
            name-line (str "[" method " " path " " route-name "]")]
        (joined-by
         "\n"
         (into [name-line (repeat-str "-" (count name-line))]
               (map interceptor-info interceptors)))))))

