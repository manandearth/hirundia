(ns hirundia.core ^:figwheel-always
  (:require-macros [cljs.core.async.macros :refer [go]])
    (:require 
     #_[cljs-http.client :as http]
     #_[cljs.core.async :refer [<! >! chan put! take!]]
     [reagent.core :as r]
     [re-frame.core :as re-frame]
     [day8.re-frame.http-fx]
     [hirundia.db :as db]
     [hirundia.views :as views]
     [hirundia.events :as events]
     [hirundia.config :as config]
     [oz.core :refer [vega vega-lite] ]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!))
  (println "dev mode"))

(js/console.log "232")

;;;;;;cljs-http;;;;;;;

;;;EXAMPLE;;;;
#_(go (let [response (<! (http/get "https://api.github.com/users"
                                 {:with-credentials? false
                                  :query-params {"since" 135}}))]
      (prn (:status response))
      (prn (map :login (:body response)))))

;;THE DATAFRAME
;; (def df (r/atom {}))

;; (defn update-df [url-string]
;;   (go
;;     (let [response (<! (http/get url-string))]
;;       (swap! df assoc :data (:body response)))))

;; (update-df "http://localhost:8080/transit")




(def test-atom (r/atom 1))
;(swap! test-atom inc)

(defn base-element []
   [:div [:h2 (str  "test-atom value is: " (swap! test-atom inc))]
    [:p (str "the id's are: "
             (map :id  (:data db/default-db)))]
    [:p (str "the gps points are: " (map :gps  (:data db/default-db)))]
    [:p (str "the heights are: " (map :height  (:data db/default-db)))]])



(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (r/render [views/main-panel]
            (.getElementById js/document "app")
))

(defn ^:export main []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))

(defn on-js-reload []
  (main))
(main)

