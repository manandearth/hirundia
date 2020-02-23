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
      [:p {:class "h2"} (str "actualiza entrada: " id)]
      [:div {:class "card"}
       [:form {:action (str "/nests-update/" id) :method "POST"}
        ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
        [:div
         [:p [:label [:input {:type "hidden" :name "language" :value "spanish"}]]]
         [:div {:class "form-group row"}
          [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :street)]
           [:input {:class "form-control mx-sm-1" :type "text" :name "street" :value (:street record)}]]
          [:div {:class "col-auto"} [:label (t/to-spanish :house_number_name)]
           [:input {:class "form-control mx-sm-1" :type "text" :name "house_number_name" :value (:house_number_name record)}]]]

         [:div {:class "form-group row"}
          [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :lat)] [:input {:class "form-control mx-sm-1" :type "int" :name "lat" :value lat}]]
          [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :lon) [:input {:class "form-control mx-sm-1" :type "int" :name "lon" :value lon}]]]]

         [:div {:class "form-group row"}
          [:div {:class "col-auto"} [:label (t/to-spanish :species) (form/drop-down "species" (mapv #(t/to-spanish %) [:swallow :swift :martin :pallid_swift :red_rumped_swallow]) (t/to-spanish (keyword (:species record))))]]
          [:div {:class "col-auto"} [:label (t/to-spanish :type) (form/drop-down "type-of" (mapv #(t/to-spanish %) [:balcony :window :cornice :gable :cables :crack]) (t/to-spanish (keyword (:type record))))]]]

         [:div {:class "form-group row"}
          [:div {:class "col-auto"} [:label (t/to-spanish :height) (form/drop-down "height" (map inc (range 20)) (:height record))]]
          [:div {:class "col-auto"} [:label (t/to-spanish :facing) (form/drop-down "facing" (mapv #(t/to-spanish %) [:N :NW :W :SW :S :SE :E :NE]) (t/to-spanish (keyword (:facing record))))]]]

         [:div [:label (t/to-spanish :date) [:input {:type "date" :name "date" :value (:date record)}]]]

         [:div [:input {:type "hidden" :name "qty" :value 1}]]

         [:div {:class "card"}
          [:div {:class "card-body" :style "background-color: #f5faff;"}
           [:div {:class "card-subtitle mb-2 text-muted"} "Si el nido ya no está allí, rellene lo siguiente e incluya el día registrado:"]
           [:div [:label (t/to-spanish :destroyed) (form/drop-down "destroyed" [(t/to-spanish :true) (t/to-spanish :false)] (t/to-spanish (keyword (str (:destroyed record)))))]]]]
         [:div [:label (t/to-spanish :destroyed_date) [:input {:type "date" :name "destroyed_date" :destroyed_date record}]]]
         [:div  {:class "col-auto justify-content-center" :style "display: flex; padding: 1rem;"} [:input {:type "submit" :class "btn btn-primary mb-2" :value (t/to-spanish :update)}]]]]]])))

