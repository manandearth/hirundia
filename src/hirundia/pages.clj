(ns hirundia.pages
  (:require [hiccup.core :as h]
            [hiccup.form :as form]
            [hiccup.table :as table]))

(def sample-entry (vector (zipmap [:id :street :number :gps :species :height :facing :type :date :destroyed :destroyed_date :delete "delete 23"] [23 "Juan Bueno" 1 "(32.677 0.201)" "swallow" 5 "N" "crack" "2019-04-04" false nil])))
sample-entry
(defn intro []
  [:div
   [:h2 "From Wikipedia " [:a {:href "https://en.wikipedia.org/wiki/Swallow"} "Swallow:"]]
   [:p "The swallows, martins and saw-wings, or Hirundinidae, are a family of passerine birds found around the world on all continents, including occasionally in Antarctica. Highly adapted to aerial feeding, they have a distinctive appearance. The term Swallow is used colloquially in Europe as a synonym for the barn swallow. There are around 90 species of Hirundinidae, divided into 19 genera, with the greatest diversity found in Africa, which is also thought to be where they evolved as hole-nesters. They also occur on a number of oceanic islands. A number of European and North American species are long-distance migrants by contrast, the West and South African swallows are non-migratory."
    ]
   [:h2 "The project"]
   [:p "Hirundia is a data collection tool for investigating the effects of humans on the populations of migrating birds. Users have to register an account in order to update the database. "]
   [:p "Each nest makes an entry, like a row in an excel sheet"]
   [:p "The species has to be identified, the street name and house number as well as the GPS coordinates (longitude and latitude), the direction the nest is facing, the height from ground level, the type of construction (balcony, window, cornice, gable, crack, electric cables), and the date the data was collected"]
   [:p "Once a nest has beed destroyed it can be updated in the db, clicking on the entry id and changing the destroyed column value to `true` as well as marking the date of registry as `destroyed_date`"]
   [:div
    [:h2 "Example entry:"]
    (table/to-table1d
     sample-entry
     [:id "ID"
      :street "Street"
      :number "No."
      :gps "GPS"
      :species "Species"
      :facing "Facing"
      :height "Height"
      :type "Type"
      :date "Date"
      :destroyed "Destroyed?"
      :destroyed_date "Date destroyed"
      :delete "Delete Entry"]
     )
   #_ (table/to-table1d
     {:id 1 :name "boy"}
     [:id "ID"
      :name "NAME"])]
   [:div
    [:h2 "example form:"]
    [:form {:action "/" :method "GET"}
       ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
       [:div
        [:p [:label.justify "Street: " [:input {:type "text" :name "street"}]]]
        [:p [:label.justify "Number: " [:input {:type "int" :name "number"}]]]
        [:p [:label.justify "Latitude: " [:input {:type "int" :name "lat" }]]]
        [:p [:label.justify "Longitude: " [:input {:type "int" :name "lon" }]]]
        [:p [:label.justify "Species: " (form/drop-down "species" ["swallow" "swift" "martin"])]]
        [:p [:label.justify "Height: " (form/drop-down "height" (map inc (range 20)))]]
        [:p [:label.justify "Facing: "(form/drop-down "facing" ["N" "NW" "W" "SW" "S" "SE" "E" "NE"])]]
        [:p [:label.justify "Type: " (form/drop-down "type-of" ["balcony" "window" "cornice" "gable" "cables" "crack"])]]
        [:p [:label.justify "Date: " [:input {:type "date" :name "date"}]]]
        [:p "If the nest is no longer there fill in the following and include the day recorded:"]
        [:p [:label.justify "Destroyed: " (form/drop-down "destroyed" ["true" "false"])]]
        [:p [:label.justify "Destroyed date: " [:input {:type "date" :name "destroyed_date"}]]]
        [:p [:label.justify "λ ->" [:input {:type "submit" :value "Update"}]]]]
       ]]])
