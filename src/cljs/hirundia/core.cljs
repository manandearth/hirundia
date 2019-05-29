(ns hirundia.core ^:figwheel-always
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
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
     [cljsjs.leaflet]
     [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                        oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

;;upon startup


(defn dev-setup []
  (if config/debug?
    (do (enable-console-print!)
        (println "dev mode"))
    (js/console.log "production")))

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
#_(defn map-schema [data] {:schema "https://vega.github.io/schema/vega-lite/v3.json"
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

(defn nest-height-schema [data] {:width 600
                                 :data {:values data}
                                 :encoding {:x {:field "species" :type "nominal"}
                                            :y {:aggregate "count"
                                                :type "quantitative"
                                                :stack "normalize"}
                                            :color {:field "height" :type "nominal"
                                                    :scale {:domain ["12" "11" "10" "9" "8" "7" "6" "5" "4" "3" "2" "1"]
                                                            :range  ["#D5D8DD" "#BECDE0" "#AEC7E5" "#99B9E1" "#6098DC" "#4B8AD8" "#2D75CD" "#1D6FD3" "#0F5DBD" "#0C4B97" "#063F84" "#04254E"]}}}
                                 :legend {:title "height by species"}
                                 :mark "bar"})

(defn scatter-schema [data] {;:schema "https://vega.github.io/schema/vega-lite/v3.json"
                             :width 500
                             :description "A scatter plot to show height in relation to latitude"
                             :data {:values data}
                             :mark "point"
                             :encoding {:x     {:field "height", :type "quantitative"}
                                        :y     {:field "latitude" :type "quantitative" :scale {:domain [36.252 36.255]}}
                                        :color {:field "species" :type "nominal"}
                                        :shape  {:field "species" :type "nominal"}}})
(defn gps-helper [lat lon]
  (array [lat lon]))

(defn nests-per-address-schema [data] {:width 500
                                       :description "A plot showing addresses ordered by number of nests"
                                       :data {:values data}

                                       :mark {:type "bar" :tooltip {:content [{:field "address" :type "nominal"}]}}
                                       :encoding {:x {:field "gps" :type "nominal"}
                                                  :y {:aggregate "count" :type "quantitative" :stack "normalize"}
                                                  :tooltip [{:field "street" :type "nominal"}
                                                            {:field "number" :type "nominal"}]}})

(defn oz-nest-height []
  (let [d (r/atom nil)]
    (fetch-data! d)
    (fn []
      [:div
       [oz/vega (nest-height-schema @d)]])))

(defn oz-scatter []
  (let [d (r/atom nil)]
    (fetch-data! d)
    (fn []
      [:div
       [oz/vega (scatter-schema @d)]])))

(defn oz-nests-per-address []
  (let [d (r/atom nil)]
    (fetch-data! d)
    (fn []
      [:div
       [oz/vega (nests-per-address-schema
                 (map #(assoc % :gps [(:latitude %) (:longitude %)]) @d))]])))

(def URL-OSM   "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
(def attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors")

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

(defn popup [entry]
  (let [street (:street entry)
        number (:number entry)
        height (:height entry)
        facing (:facing entry)
        type-of (:type entry)
        date (.toDateString (:date entry))]
    (str "<table>
<tr><td><b>Address: </b>" street " "  number "</td></tr>
<tr><td><b>Height: </b>" height " m</td></tr>
<tr><td><b>Aspect: </b>" facing "</td></tr>
<tr><td><b>Type of nest: </b>" type-of "</td></tr>
<tr><td><b>First recorded: </b>" date "</td></tr>
</table>")))

(defn tooltip [entry]
  (let [lat (:latitude entry)
        lon (:longitude entry)
        gps (str "(" lat ", " lon ")")]
    (str "gps -> " gps)))

(def vejer-map {:lat 36.253
                :ln -5.965
                :zoom 17})

(defn legend []
  (fn []
    [:div.legend

     [:svg {:view-box "0 0 100 20" :x 200 :width 500}

      [:g [:text {:x 12  :y 12 :font-size 5} "Swallow"]
       [:circle {:r 1.5 :style {:fill "crimson" :fill-opacity 0.5 :stroke "red"} :stroke-width 0.5 :cx 10 :cy 10}]
       [:text {:x 38  :y 12 :font-size 5} "martin"]
       [:circle {:r 1.5 :style {:fill "steelblue" :fill-opacity 0.5 :stroke "dodgerblue"} :stroke-width 0.5 :cx 35 :cy 10}]
       [:text {:x 62  :y 12 :font-size 5} "swift"]
       [:circle {:r 1.5 :style {:fill "seagreen" :fill-opacity 0.5 :stroke "green"} :stroke-width 0.5 :cx 60 :cy 10}]]]]))

;;the creation of the marker must happen in the ajax call, otherwise it happens before the call returns resulting in no markers...
(defn ajax-map-call [m]
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :error-handler (fn [] (js/console.log "problem boss.."))
                   :handler   (fn [response]
                                (doseq [e (transform-df response)]
                                  (-> (circle e)
                                      (.bindPopup (popup e))
                                      (.bindTooltip (tooltip e))
                                      (.addTo m))))}))

(defn ajax-did-mount []
  (fn []
    (let [atm (r/atom  nil)
          map (.setView (.map js/L "map") #js [36.253 -5.965] 17)
          centered (-> (.tileLayer js/L  URL-OSM
                                   (clj->js {:attribution attribution
                                             :maxZoom     19}))
                       (.addTo map))]
      (ajax-map-call map))));important that the .addTo and `ajax-map-call` is for the base element `map`, and not to `cenetered` ( will produce errors)

(defn home []
  (fn []
    (r/create-class
     {:display-name        "reactive-map"
      :component-did-mount (ajax-did-mount)
      ;; :component-did-update update
      :reagent-render      (fn [] [:div#map {:style {:height "640px" :width "1024px"}}])})))

;;View


(defn mount-root []
  (r/render
   [:div
    [:h1 "Dashboard"]
    [:h2 "Distribution of nests:"]
    [:div
     [home]
     [legend]
     [:h2 "Nest height by species:"]
     [oz-nest-height]
     [:h2 "Height / Latitude / Species:"]
     [oz-scatter]
     [:h2 "Address / Number of nests"]
     [oz-nests-per-address]]]

   (.getElementById js/document "app")))



;;Entry point for dev


(defn ^:export main []
  #_(re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))


;;Figwheel can be setup to watch this


(defn on-js-reload []
  (main))
(main)

