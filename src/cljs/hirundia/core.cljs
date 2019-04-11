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
     [oz.core :as oz]
     #_[cljsjs.leaflet]))

;;upon startup
(defn dev-setup []
  (when config/debug?
    (enable-console-print!))
  (println "dev mode"))

(js/console.log "232")


(def test-atom (r/atom 1))
;(swap! test-atom inc)

(defn base-element []
   [:div [:h2 (str  "test-atom value is: " (swap! test-atom inc))]
    [:p (str "the id's are: "
             (map :id  (:data db/default-db)))]
    [:p (str "the gps points are: " (map :gps  (:data db/default-db)))]
    [:p (str "the heights are: " (map :height  (:data db/default-db)))]])

;;THE DATAFRAME ATOM
(def df (r/atom nil))

;;parse ps string to :lat and :lon floats
(defn coords-helper [entry]
  (let [split (clojure.string/split (:gps entry) #"[(),]")
                          lat (js/parseFloat (second split))
                          lon (js/parseFloat (last split))]
    {:latitude lat :longitude lon}))

;;helper function to parse coordinates and time to js format
(defn transform-df [df] 
  (for [e df]
    (-> (conj e (coords-helper e))
        (assoc :date (new js/Date (:date e)))
        (assoc :destroyed_date (if-not nil? (new js/Date (:destroyed_date e))))
        (dissoc :gps))))

;;update the atom from DB via AJAX
(defn get-data []
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :handler   (fn [response] (reset! df (transform-df response)))})
  (fn []
    [:div
     (for [d @df]
       [:p (str "Entry: " (.indexOf @df d) " -> " d)])]))

;;;SANDBOX FOR VEGA-LITE;;;;;;;;;;;
(defn play-data [& names]
  (for [n names
        i (range 20)]
    {:time i :item n :quantity (+ (Math/pow (* i (count n)) 0.8) (rand-int (count n)))}))


(defn oz-viz []
  [:div
   [oz/vega-lite {:data {:values (play-data "monkey" "slipper" "broom")}
   :encoding {:x {:field "time"}
              :y {:field "quantity"}
              :color {:field "item" :type "nominal"}}
   :mark "line"}]])
;;---------------------------

;;---------VEGA-VIZ----------

;;---------------------------

(defn oz-viz2 []
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :handler   (fn [response] (reset! df (transform-df response)))})
  (fn []
    [:div
     [oz/vega {:schema "https://vega.github.io/schema/vega-lite/v3.json"
               :width  1024
               :height 640
               :config
               {:autosize "none" ;default is pad and it doesn't crop a too lage an object
                }
               :layer
               [#_{:data       {:values @df
                                :format {:type "json" :feature "features"}}
                   :projection {:type "albers"}
                   :mark       {:type "geoshape" :fill "lightgray" :stroke "transparent"}}

                {:data       {:values @df}
                 :projection {:type "albers"}
                 :mark       "circle"
                 :encoding   {:longitude {:field "longitude" :type "quantitative"}
                              :latitude  {:field "latitude" :type "quantitative"}
                              :size      {:field "height" :type "quantitative"}
                              :color     {:field  "species"
                                          :type   "nominal"
                                          :legend {:title  nil,
                                                   :orient "bottom-right"
                                                   :offset 0
                                                   }}
                              
                              :tooltip [{:field "street" :type "nominal"}
                                        {:field "number" :type "quantitative"}
                                        {:field "facing" :type "nominal"}
                                        {:field "type" :type "nominal"}
                                        {:field "username" :type "nominal"}]
                              }
                 :config {:view  {:stroke "transparent"}
                          :style {:cell {:stroke "transparent"}}}}]}]]))



  (def URL-OSM "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
(def attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors")
#_(defn create-osm []
  (let [m (-> js/L
              (.map "mapid2")
              (.setView (array -33.8675 151.2070) 9))       ;; Sidney
        tile1 (-> js/L (.tileLayer URL-OSM
                                   #js{:maxZoom     16
                                       :attribution "OOGIS RL, OpenStreetMap &copy;"}))
        base (clj->js {"OpenStreetMap" tile1})
        ctrl (-> js/L (.control.layers base nil))]
    (.addTo tile1 m)
    (.addTo ctrl m)))


(defn home-render []
  [:div#map {:style {:height "10px" :width "10px"}}])
 

(defn home-did-mount []
  (let [map (.setView (.map js/L "map") #js [36.253 -5.965] 17)
        
        centered (-> (.tileLayer js/L  URL-OSM
                                 (clj->js {:attribution attribution
                                           :maxZoom     18}))
                     (.addTo map))]


    (->  (.circle js/L #js [36.253 -5.965]
                 (clj->js {:color       "red"
                           :fillColor   "#f03"
                           :fillOpacity 0.5
                           :radius      5}))
         
          (.addTo map)))
  )




;;      var circle = L.circle([51.508, -0.11], {
;;     color: 'red',
;;     fillColor: '#f03',
;;     fillOpacity: 0.5,
;;     radius: 500
;; }).addTo(mymap);








(defn home []
  (r/create-class
   {:component-did-mount  home-did-mount
    :reagent-render      (fn [] [:div#map {:style {:height "640px" :width "1024px"}}
                                 ])}
   ))

#_(defn osm-page []
  
  [:head
   [:meta {:charset "UTF-8"}]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
   [:link {:rel "stylesheet" :href "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" :type "text/css"}]
   ;[:script {:src "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js" :charset "utf-8"}]
   [:body
    [:div {:id "app"}]
    [:script {:src "js/compiled/app.js" :type "text/javascript"}]
    [:script "hirundia.core.main();"]]]) 


;;THE TEMP VIEW
(defn mount-root []
  #_(re-frame/clear-subscription-cache!)
  (r/render 
   [:div
    #_[views/main-panel]
    #_[base-element]
    #_[osm-page]
    #_[create-osm]
    [:div
[home]
     [:h1 "Distibution of nests:"]
     [oz-viz2]
     #_[all-data]]
    [get-data]
     ]
   (.getElementById js/document "app")
))



;;Entry point for dev
(defn ^:export main []
  #_(re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))


;;Figwheel can be setup to watch this
(defn on-js-reload []
  (main))
(main)

