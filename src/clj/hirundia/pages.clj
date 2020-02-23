(ns hirundia.pages
  (:require [hiccup.core :as h]
            [hiccup.form :as form]
            [hiccup.table :as table]
            [hirundia.translate :as t]))

(def sample-entry (vector (zipmap [:id :street :house_number_name :gps :species :height :facing :type :date :destroyed :destroyed_date :delete "borrar 23"] [23 "Juan Bueno" 1 "(32.677 0.201)" "Golondrina Común" 5 "norte" "grieta" "2019-04-04" "No" nil])))

(defn intro []
  [:div {:class "container"}
   [:p {:class "h3"} "El proyecto"]
   [:p "El proyecto Hirundia es una herramienta que explora las relacion entre especies de aves urbanos golondrinas, vencejos y aviones comunes con los humanos para la conservación.
"]
   [:p "Hirundia es un instrumento de recopilación de datos para investigar los efectos de los seres humanos en las poblaciones de aves insectívoro migratorias. Los usuarios deben registrar una cuenta para actualizar la base de datos."]
   [:p [:strong "Cada nido hace una entrada, como una fila en una hoja de Excel."]]
   [:div {:class "alert alert-success"} [:p "La especie debe ser identificada, el nombre de la calle y el número de la casa (o el nombre) así como las coordenadas GPS (longitud y latitud), la orientación del nido, la altura desde el nivel del suelo, el tipo de construcción (balcón, ventana, cornisa, tejado, grieta, cable, y la fecha en que se recogieron los datos"]]
   [:p "Una vez que un nido ha sido destruido puede ser actualizado en la base de datos, haciendo clic en el ID de la entrada y cambiando el valor de la columna destruida a 'si', así como marcando la fecha de registro como 'fecha_destruida' ."]
   [:div
    [:p {:class "h3"} "Ejemplo de una entrada en el listado:"]
    (table/to-table1d
     sample-entry
     [:id "ID"
      :street "Calle"
      :house_number_name "No./nombre"
      :gps "GPS"
      :species "Especie"
      :facing "Orientación"
      :height "Altura"
      :type "Construcción"
      :date "Fecha"
      :destroyed "Destruida?"
      :destroyed_date "Fecha destruida"
      :delete "Borrar entrada"])
    #_(table/to-table1d
       {:id 1 :name "boy"}
       [:id "ID"
        :name "NAME"])]
   [:div
    [:p {:class "h3"} "Formulario de ejemplo:"]
    [:p "Tenga en cuenta que este formulario está desactivado y que las entradas deben ser enviadas una vez que se haya iniciado la sesión a través del enlace 'Añadir un nido' de arriba.
"]
    [:div {:class "container"}
     [:div {:class "card"}
      [:form {:action "/nests-insert" :method "POST"}
      ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
       [:fieldset {:disabled "true"}
        ;;TODO language is hard coded for now

        [:p [:label [:input {:type "hidden" :name "language" :value "spanish"}]]]

        [:div {:class "form-group row"}
         [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :street)]
          [:input {:class "form-control mx-sm-1" :id "disabledInput" :type "text" :name "street"}]]
         [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :house_number_name)]
          [:input {:class "form-control mx-sm-1" :type "text" :name "house_number_name"}]]]

        [:div {:class "form-group row"}
         [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :lat)]
          [:input {:class "form-control mx-sm-1" :type "int" :name "lat"}]]
         [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :lon)]
          [:input {:class "form-control mx-sm-1" :type "int" :name "lon"}]]]

        [:div {:class "form-group row"}
         [:div {:class "col-auto"} [:label (t/to-spanish :species)   (form/drop-down "species" (map #(t/to-spanish %) [:swallow :swift :martin :pallid_swift :red_rumped_swallow]))]]
         [:div {:class "col-auto"} [:label (t/to-spanish :type)      (form/drop-down "type-of" [(t/to-spanish :window) (t/to-spanish :cornice) (t/to-spanish :crack) (t/to-spanish :cables) (t/to-spanish :gable) (t/to-spanish :balcony)] (t/to-spanish :window))]]]

        [:div {:class "form-group row"}
         [:div {:class "col-auto"} [:label (t/to-spanish :height)    (form/drop-down "height" (map inc (range 20)) 5)]]
         [:div {:class "col-auto"} [:label (t/to-spanish :facing)   (form/drop-down "facing" [(t/to-spanish :N) (t/to-spanish :NE) (t/to-spanish :E) (t/to-spanish :SE) (t/to-spanish :S) (t/to-spanish :SW) (t/to-spanish :W) (t/to-spanish :NW)] (t/to-spanish :N))]]]

        [:div [:label (t/to-spanish :date)      [:input {:type "date" :name "date"}]]]
        [:div {:class "card"} [:div {:class "card-body" :style "background-color: #f5faff"}
                               [:div {:class "card-subtitle mb-2 text-muted"} "Cada nido crea una entrada en la base de datos. "]
                               [:div {:class "card-subtitle mb-2 text-muted"} "En el caso de múltiples nidos con las mismas especificaciones se actualiza este valor:"]
                               [:div (:class "col-auto") [:label (t/to-spanish :qty)       [:input {:class "form-control ms-mx-1" :type "int" :name "qty" :value 1}]]]]]
        [:div {:class "card"} [:div {:class "card-body" :style "background-color: #e3f2fd;"}
                               [:div {:class "card-subtitle mb-2 text-muted"} "Si el nido ya no está allí, rellene lo siguiente e incluya el día registrado:"]
                               [:div [:label (t/to-spanish :destroyed) (form/drop-down "destroyed" [(t/to-spanish :false) (t/to-spanish :true)] (t/to-spanish :false))]]
                               [:div [:label (t/to-spanish :destroyed_date) [:input {:type "date" :name "destroyed_date"}]]]]]
        [:div {:class "col-auto"} [:input {:type "submit" :class "btn btn-primary mb-2" :value (t/to-spanish :submit)}]]]]]]]])

