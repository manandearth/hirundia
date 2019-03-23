(ns hirundia.services.nests.retrieve.view
  (:require [hiccup.page :as page]
            [hiccup.table :as table]
            [clojure.string :as string]
            [hirundia.views :as views]))

(defn update-entry [record id]
;;FIXME ugly estraction of the lat and lon from gps point (i.e. "(12.123, 45.456)" -> 12.123 45.456
  (let [lat (first (string/split (last (string/split (:gps record) #"\(")) #"\,"))
        lon (first (string/split (last (string/split (last (string/split (:gps record) #"\(")) #"\,")) #"\)"))] 
    (page/html5
     (views/gen-page-head (str "update entry " id))
     views/header-links
     [:div
      [:h1 (str "update entry: " id )]
      [:form {:action (str "/nests-update/" id) :method "POST"}
       ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
       [:div
        [:p [:label.justify "Street: " [:input {:type "text" :name "street" :value (:street record)}]]]
        [:p [:label.justify "Number: " [:input {:type "int" :name "number" :value (:number record)}]]]
        [:p [:label.justify "Latitude: " [:input {:type "int" :name "lat" :value lat}]]]
        [:p [:label.justify "Longitude: " [:input {:type "int" :name "lon" :value lon}]]]
        [:p [:label.justify "Species: " [:input {:type "text" :name "species" :value (:species record)}]]]
        [:p [:label.justify "Height: " [:input {:type "text" :name "height" :value (:height record)}]]]
        [:p [:label.justify "Facing: " [:input {:type "text" :name "facing" :value (:facing record)}]]]
        [:p [:label.justify "Type: " [:input {:type "text" :name "type-of" :value (:type record)}]]]
        [:p [:label.justify "Date: " [:input {:type "text" :name "date" :value (:date record)}]]]
        [:p "If the nest is no longer there fill in the following and include the day recorded:"]
        [:p [:label.justify "Destroyed: " [:input {:type "text" :name "destroyed" :value (:destroyed record)}]]]
        [:p [:label.justify "Destroyed date: " [:input {:type "text" :name "destroyed_date" :destroyed_date record}]]]
        [:p [:label.justify "λ ->" [:input {:type "submit" :value "Update"}]]]]
       ]])))

