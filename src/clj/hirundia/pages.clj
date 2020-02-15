(ns hirundia.pages
  (:require [hiccup.core :as h]
            [hiccup.form :as form]
            [hiccup.table :as table]))

(def sample-entry (vector (zipmap [:id :street :house_number_name :gps :species :height :facing :type :date :destroyed :destroyed_date :delete "borrar 23"] [23 "Juan Bueno" 1 "(32.677 0.201)" "Golondrina Común" 5 "norte" "grieta" "2019-04-04" "No" nil])))

(defn intro []
  [:div {:class "container"}
   [:h2 "El proyecto"]
   [:p "El proyecto Hirundia es una herramienta que explora las relacion entre especies de aves urbanos golondrinas, vencejos y aviones comunes con los humanos para la conservación.
"]
   [:p "Hirundia es un instrumento de recopilación de datos para investigar los efectos de los seres humanos en las poblaciones de aves insectívoro migratorias. Los usuarios deben registrar una cuenta para actualizar la base de datos."]
   [:p "Cada nido hace una entrada, como una fila en una hoja de Excel."]
   [:div {:class "alert alert-success"} [:p "La especie debe ser identificada, el nombre de la calle y el número de la casa (o el nombre) así como las coordenadas GPS (longitud y latitud), la orientación del nido, la altura desde el nivel del suelo, el tipo de construcción (balcón, ventana, cornisa, tejado, grieta, cable, y la fecha en que se recogieron los datos"]]
   [:p "Una vez que un nido ha sido destruido puede ser actualizado en la base de datos, haciendo clic en el ID de la entrada y cambiando el valor de la columna destruida a 'si', así como marcando la fecha de registro como 'fecha_destruida' ."]
   [:div
    [:h2 "Formulario de entrada:"]
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
    [:h2 "Formulario de ejemplo:"]
    [:h2 "Tenga en cuenta que este formulario está desactivado y que las entradas deben ser enviadas una vez que se haya iniciado la sesión a través del enlace 'Añadir un nido' de arriba.
"]
    [:form {:action "/" :method "GET"}
       ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
     [:div
      [:p [:label.justify "Calle: " [:input {:type "text" :name "street"}]]]
      [:p [:label.justify "No./nombre: " [:input {:type "text" :name "house_number_name"}]]]
      [:p [:label.justify "Latitud: " [:input {:type "int" :name "lat"}]]]
      [:p [:label.justify "Longitud: " [:input {:type "int" :name "lon"}]]]
      [:p [:label.justify "Especie: " (form/drop-down "species" ["golondrina común" "vencejo común" "avión común"])]]
      [:p [:label.justify "Altura: " (form/drop-down "height" (map inc (range 20)))]]
      [:p [:label.justify "Orientación: " (form/drop-down "facing" ["norte" "noretoeste" "oeste" "sudoeste" "sur" "sudeste" "este" "norteste"])]]
      [:p [:label.justify "Construcción: " (form/drop-down "type-of" ["balcón" "ventana" "cornisa" "tejado" "cable" "grieta"])]]
      [:p [:label.justify "Fecha: " [:input {:type "date" :name "date"}]]]
      [:p  "Cada nido crea una entrada en la base de datos. En el caso de múltiples nidos con las mismas especificaciones se actualiza este valor:
"]
      [:p [:label.justify "Cantidad: "       [:input {:type "int" :name "qty" :value 1}]]]
      [:p "Si el nido ya no está allí, rellene lo siguiente e incluya el día registrado:"]
      [:p [:label.justify "Destruida: " (form/drop-down "destroyed" ["si" "no"])]]
      [:p [:label.justify "Fecha de destrucción: " [:input {:type "date" :name "destroyed_date"}]]]
      [:p [:label.justify "λ ->" [:input {:type "submit" :value "Actualiza"}]]]]]]])
