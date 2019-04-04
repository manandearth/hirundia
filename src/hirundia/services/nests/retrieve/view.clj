(ns hirundia.services.nests.retrieve.view
  (:require [hiccup.page :as page]
            [hiccup.table :as table]
            [hiccup.form :as form]
            [clojure.string :as string]
            [hirundia.views :as views]))

(defn update-entry [request id record]
;;FIXME ugly estraction of the lat and lon from gps point (i.e. "(12.123, 45.456)" -> 12.123 45.456
  (let [lat (first (string/split (last (string/split (:gps record) #"\(")) #"\,"))
        lon (first (string/split (last (string/split (last (string/split (:gps record) #"\(")) #"\,")) #"\)"))] 
    (page/html5
     (views/gen-page-head (str "update entry " id))
     (views/header-links request)
     [:div
      [:h1 (str "update entry: " id )]
      [:form {:action (str "/nests-update/" id) :method "POST"}
       ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
       [:div
        [:p [:label.justify "Street: " [:input {:type "text" :name "street" :value (:street record)}]]]
        [:p [:label.justify "Number: " [:input {:type "int" :name "number" :value (:number record)}]]]
        [:p [:label.justify "Latitude: " [:input {:type "int" :name "lat" :value lat}]]]
        [:p [:label.justify "Longitude: " [:input {:type "int" :name "lon" :value lon}]]]
        [:p [:label.justify "Species: " (form/drop-down "species" ["swallow" "swift" "martin"] (:species record))]]
        [:p [:label.justify "Height: " (form/drop-down "height" (map inc (range 20)) (:height record))]]
        [:p [:label.justify "Facing: "(form/drop-down "facing" ["N" "NW" "W" "SW" "S" "SE" "E" "NE"] (:facing record))]]
        [:p [:label.justify "Type: " (form/drop-down "type-of" ["balcony" "window" "cornice" "gable" "cables" "crack"] (:type record))]]
        [:p [:label.justify "Date: " [:input {:type "date" :name "date" :value (:date record)}]]]
        [:p "If the nest is no longer there fill in the following and include the day recorded:"]
        [:p [:label.justify "Destroyed: " (form/drop-down "destroyed" ["true" "false"] (:destroyed record))]]
        [:p [:label.justify "Destroyed date: " [:input {:type "date" :name "destroyed_date" :destroyed_date record}]]]
        [:p [:label.justify "λ ->" [:input {:type "submit" :value "Update"}]]]]
       ]])))

