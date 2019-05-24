(ns hirundia.core ^:figwheel-always
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
     #_[cljs-http.client :as http]
     #_[cljs.core.async :refer [<! >! chan put! take!]]
     [reagent.core :as r]
     [re-frame.core :as re-frame :refer [subscribe dispatch]]
     [ajax.core :refer [GET POST]]
     [day8.re-frame.http-fx]
     [cljs.core.async :refer [<! >! take! put! chan]]
     [promesa.core :as p]
     [hirundia.db :as db]
     [hirundia.subs :as subs]
     [hirundia.views :as views]
     [hirundia.events :as events]
     [hirundia.config :as config]
     [oz.core :as oz]
     [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                        oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]
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
(defonce df (r/atom nil))

;;parse ps string to :lat and :lon floats
(defn coords-helper [entry]
  (let [split (clojure.string/split (:gps entry) #"[(),]")
        lat (js/parseFloat (second split))
        lon (js/parseFloat (last split))]
    {:latitude lat :longitude lon}))

;;helper function to parse coordinates and time to js format
(defn transform-df [data]
  (vec (for [e  data]
         (-> (conj e (coords-helper e))
             (assoc :date (new js/Date (:date e)))
             (assoc :destroyed_date (if-not nil? (new js/Date (:destroyed_date e))))
             (dissoc :gps)))))

;;update the (local) atom from DB via AJAX
(defn fetch-data! [a]
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :handler   (fn [response] (reset! a (transform-df response)))}))

;;trial -> see if updating a global atom works


(defn get-data! []
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :handler   (fn [response] (reset! df (transform-df response)))})
  #_(fn []
      [:div
       (for [d @df]
         [:p (str "Entry: " (.indexOf @df d) " -> " d)])]))


;;;SANDBOX FOR VEGA-LITE;;;;;;;;;;;


(defn play-data [& names]
  (for [n names
        i (range 20)]
    {:time i :item n :quantity (+ (Math/pow (* i (count n)) 0.8) (rand-int (count n)))}))

#_(defn oz-viz []
    [:div
     [oz/vega-lite {:data {:values (play-data "monkey" "slipper" "broom")}
                    :encoding {:x {:field "time"}
                               :y {:field "quantity"}
                               :color {:field "item" :type "nominal"}}
                    :mark "line"}]])
;;---------------------------

;;---------VEGA-VIZ----------

;;---------------------------
(defn schema [data] {:schema "https://vega.github.io/schema/vega-lite/v3.json"
                     :width  1024
                     :height 640
                     :config
                     {:autosize "none" ;default is pad and it doesn't crop a too lage an object
                      }
                     :layer
                     [{:data       {:url "json/vejer-geoshape.json"
                                    :format {:type "json" :feature "features"}}
                       :projection {:type "albers"}
                       :mark       {:type "geoshape" :fill "lightgray" :stroke "transparent"}}

                      {:data       {:values data}
                       :projection {:type "albers"}
                       :mark       "circle"
                       :encoding   {:longitude {:field "longitude" :type "quantitative"}
                                    :latitude  {:field "latitude" :type "quantitative"}
                                    :size      {:field "height" :type "quantitative"}
                                    :color     {:field  "species"
                                                :type   "nominal"
                                                :legend {:title  nil,
                                                         :orient "bottom-right"
                                                         :offset 0}}

                                    :tooltip [{:field "street" :type "nominal"}
                                              {:field "number" :type "quantitative"}
                                              {:field "facing" :type "nominal"}
                                              {:field "type" :type "nominal"}
                                              {:field "username" :type "nominal"}]}
                       :config {:view  {:stroke "transparent"}
                                :style {:cell {:stroke "transparent"}}}}]})

(defn oz-viz2 []
  (let [d (r/atom nil)]
    #_(GET "/transit" {:response-format :json
                       :keywords?       true
                       :handler         (fn [response] (reset! df (transform-df response)))})
    (fetch-data! d)
    (fn []
      [:div
       [oz/vega (schema @d)]])))

(def URL-OSM   "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
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

#_(defn home-render []
    [:div#map {:style {:height "10px" :width "10px"}}])
(def mock-dist
  [{:id 1 :street "Altozano" :number 1 :username "sophie" :height 7 :facing "NW" :longitude -5.96626 :latitude 36.25359 :destroyed false :destroyed_date nil :date nil :species "swallow" :type "gable"}
   {:id 2 :street "Altozano" :number 1 :username "sophie" :height 7 :facing "NW" :longitude -5.96626 :latitude 36.25159 :destroyed false :destroyed_date nil :date nil :species "swallow" :type "gable"}
   {:id 3 :street "Altozano" :number 3 :username "noah" :height 8 :facing "NW" :longitude -5.96531 :latitude 36.25259 :destroyed false :destroyed_date nil :date nil :species "swift" :type "window"}
   {:id 4 :street "Juan Bueno" :number 1 :username "noah" :height 6 :facing "N" :longitude -5.96424 :latitude 36.2532 :destroyed false :destroyed_date nil :date nil :species "swallow" :type "window"}
   {:id 5 :street "Juan Bueno" :number 2 :username "robin" :height 6 :facing "N" :longitude -5.96454 :latitude 36.2528 :destroyed false :destroyed_date nil :date nil :species "martin" :type "cornice"}])

(def my-list (quote ({:date           #inst "2019-04-04T22:00:00.000-00:00"
                      :number         4
                      :author       "robin"
                      :species        "swift"
                      :facing         "NW"
                      :type           "balcony"
                      :longitude      -5.96599
                      :street         "Altozano"
                      :id             711
                      :latitude       36.25368
                      :destroyed_date nil
                      :destroyed      false
                      :height         7}
                     {:date           #inst "2019-04-04T22:00:00.000-00:00"
                      :number         9
                      :author       "robin"
                      :species        "swift"
                      :facing         "N"
                      :type           "window"
                      :longitude      -5.96548
                      :street         "Altozano"
                      :id             716,
                      :latitude       36.25359
                      :destroyed_date nil
                      :destroyed      false
                      :height         12})))

(defn circle [entry]
  (let [lon  (:longitude   entry)
        lat  (:latitude   entry)
        species (:species entry)]
    (.circle js/L #js [lat lon]
             (clj->js {:color       (case species
                                      "swallow" "crimson"
                                      "martin" "steelblue"
                                      "swift" "seagreen")
                       :fillColor   (case species
                                      "swallow" "red"
                                      "martin" "dodgerblue"
                                      "swift" "green")
                       :fillOpacity 0.2
                       :radius      5}))))

(def vejer-map {:lat 36.253
                :ln -5.965
                :zoom 17})



;;a simple one circle try that works


(defn home-did-mount []
  (let [map (.setView (.map js/L "map") #js [36.253 -5.965] 17)
        centered (-> (.tileLayer js/L  URL-OSM
                                 (clj->js {:attribution attribution
                                           :maxZoom     19}))
                     (.addTo map))]
    (->  (circle {:id 5 :street "Juan Bueno" :number 2 :author "robin" :height 6 :facing "N" :longitude -5.96454 :latitude 36.2528 :destroyed false :destroyed_date nil :date nil :species "martin" :type "cornice"})
         (.addTo map))))

(defn ajax-map-call [m]
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :error-handler (fn [] (js/console.log "problem boss.."))
                   :handler   (fn [response]
                                (doseq [e (transform-df response)]
                                  (js/console.log "beep")
                                  (-> (circle e)
                                      (.addTo m))))}))

(defn ajax-did-mount []
  (fn []
    (let [atm (r/atom  nil)
          map (.setView (.map js/L "map") #js [36.253 -5.965] 17)
          centered (-> (.tileLayer js/L  URL-OSM
                                   (clj->js {:attribution attribution
                                             :maxZoom     19}))
                       (.addTo map))]
      (ajax-map-call map))))

(defn home []
  (fn []
    (r/create-class
     {:display-name        "reactive-map"
      :component-did-mount (ajax-did-mount)
      ;; :component-did-update update
      :reagent-render      (fn [] [:div#map {:style {:height "640px" :width "1024px"}}])})))



;;THE TEMP VIEW


(defn mount-root []
  (r/render
   [:div
    [:div
     [home]
     [:h1 "Distibution of nests:"]
     [oz-viz2]]]

   (.getElementById js/document "app")))



;;Entry point for dev


i

(defn ^:export main []
  #_(re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))


;;Figwheel can be setup to watch this


(defn on-js-reload []
  (main))
(main)

