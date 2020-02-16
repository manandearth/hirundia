(ns hirundia.services.nests.retrieve.view
  (:require [hiccup.page :as page]
            [hiccup.table :as table]
            [hiccup.form :as form]
            [clojure.string :as string]
            [hirundia.translate :as t]
            [hirundia.views :as views]))

(defn update-entry [request id record]
  (let [lat (first (string/split (last (string/split (:gps record) #"\(")) #"\,"))
        lon (first (string/split (last (string/split (last (string/split (:gps record) #"\(")) #"\,")) #"\)"))]
    (page/html5
     (views/gen-page-head (str "actualizar entrada " id))
     (views/header-links request)
     [:div {:class "container"}
      [:h1 (str "actualiza entrada: " id)]
      [:form {:action (str "/nests-update/" id) :method "POST"}
       ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
       [:div
        [:p [:label.justify [:input {:type "hidden" :name "language" :value "spanish"}]]]
        [:p [:label.justify (t/to-spanish :street) [:input {:type "text" :name "street" :value (:street record)}]]]
        [:p [:label.justify (t/to-spanish :house_number_name) [:input {:type "text" :name "house_number_name" :value (:house_number_name record)}]]]
        [:p [:label.justify (t/to-spanish :lat) [:input {:type "int" :name "lat" :value lat}]]]
        [:p [:label.justify (t/to-spanish :lon) [:input {:type "int" :name "lon" :value lon}]]]
        [:p [:label.justify (t/to-spanish :species) (form/drop-down "species" (mapv #(t/to-spanish %) [:swallow :swift :martin]) (t/to-spanish (keyword (:species record))))]]
        [:p [:label.justify (t/to-spanish :height) (form/drop-down "height" (map inc (range 20)) (:height record))]]
        [:p [:label.justify (t/to-spanish :facing) (form/drop-down "facing" (mapv #(t/to-spanish %) [:N :NW :W :SW :S :SE :E :NE]) (t/to-spanish (keyword (:facing record))))]]
        [:p [:label.justify (t/to-spanish :type) (form/drop-down "type-of" (mapv #(t/to-spanish %) [:balcony :window :cornice :gable :cables :crack]) (t/to-spanish (keyword (:type record))))]]
        [:p [:label.justify (t/to-spanish :date) [:input {:type "date" :name "date" :value (:date record)}]]]
        [:p [:label.justify [:input {:type "hidden" :name "qty" :value 1}]]]
        [:p "Si el nido ya no está allí, rellene lo siguiente e incluya el día registrado:"]
        [:p [:label.justify (t/to-spanish :destroyed) (form/drop-down "destroyed" [(t/to-spanish :true) (t/to-spanish :false)] (t/to-spanish (keyword (str (:destroyed record)))))]]
        [:p [:label.justify (t/to-spanish :destroyed_date) [:input {:type "date" :name "destroyed_date" :destroyed_date record}]]]
        [:p [:label.justify "λ ->" [:input {:type "submit" :value (t/to-spanish :update)}]]]]]]
     [:div [:h1 (:destroyed record)]])))

