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
     [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                        oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

;;upon startup


(defn dev-setup []
  (when config/debug?
    (enable-console-print!))
  (println "dev mode"))

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
    (fetch-data! d)
    (fn []
      [:div
       [oz/vega (schema @d)]])))

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

;;the creation of the marker must happen in the ajax call, otherwise it happens before the call returns resulting in no markers...
(defn ajax-map-call [m]
  (GET "/transit" {:response-format    :json
                   :keywords? true
                   :error-handler (fn [] (js/console.log "problem boss.."))
                   :handler   (fn [response]
                                (doseq [e (transform-df response)]
                                  (js/console.log "beep")
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


(defn ^:export main []
  #_(re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))


;;Figwheel can be setup to watch this


(defn on-js-reload []
  (main))
(main)

