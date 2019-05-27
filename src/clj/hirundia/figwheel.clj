(ns hirundia.figwheel
  (:require
   [com.stuartsierra.component :as component]
    [figwheel-sidecar.repl-api :as figwheel]
   ))

(def figwheel-config
  {:figwheel-options {} ;; <-- figwheel server config goes here 
   :build-ids ["dev"]   ;; <-- a vector of build ids to start autobuilding
   :all-builds          ;; <-- supply your build configs here
   [{:id "dev"
     :figwheel true
     :source-paths ["src/cljs"]
     :compiler {:main "hirundia.core"
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
    ;; (figwheel/stop-figwheel!)
    config))
