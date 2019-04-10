(ns hirundia.core ^:figwheel-always
  (:require-macros [cljs.core.async.macros :refer [go]]
                   )
    (:require 
     #_[cljs-http.client :as http]
     #_[cljs.core.async :refer [<! >! chan put! take!]]
     [reagent.core :as r]
     [re-frame.core :as re-frame]
     [ajax.core :refer [GET POST]]
     [day8.re-frame.http-fx]
     [cljs.core.async :refer [<! >! take! put! chan]]
     [promesa.core :as p]

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


(def df (r/atom nil))

(defn get-data []
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :handler   (fn [response] (reset! df response))})
  (fn []
    [:div
     (for [d @df]
       [:p (str "Entry: " (.indexOf @df d) " -> " d)])]))


(let [split (clojure.string/split (:gps (first @df)) #"[(),]")
      lat (js/parseFloat (second split))
      lon (js/parseFloat (last split))]
  [lat lon])

(map :gps @df)




(def df3 (atom {}))
(GET "/transit" :response-format :json
     :keywords? true
     :handler (fn [response] (reset! df3 response)))
@df3


#_(defn all-data []
  (let [get-stuff (fn [] (GET "/transit"
                                   :handler (fn [response]
                                              (reset! df (:body response)))))]
    (get-stuff)
    (fn []
      [:ul
       (for [d df]
         [:li d])])))
#_@df




(defn mount-root []
  #_(re-frame/clear-subscription-cache!)
  (r/render #_[views/main-panel]
            #_[base-element]
            [get-data]
            #_[all-data]
            (.getElementById js/document "app")
))

(defn ^:export main []
  #_(re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))

(defn on-js-reload []
  (main))
(main)

