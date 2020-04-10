(ns hirundia.translate
  (:require [cheshire.core :refer :all]))

(def to-spanish (parse-string (slurp "./resources/public/json/translate_es.json") true))
(def to-english (parse-string (slurp "./resources/public/json/translate_en.json") true))

#_(def to-spanish {:home "principal" :about "información" :nests "db" :dashboard "panel de control" :nests-insert "añadir nidos" :username "usuario" :password "contraseña" :register "registrarse" :login "entrar" :logout "cerrar"  :street "calle" :house_number_name "No. / nombre" :lat "latitud" :lon "longitud" :type "construcción" :window "ventana" :cornice "cornisa" :crack "grieta" :cables "cable" :gable "tejado" :balcony "balcón" :facing "orientación" :N "norte" :NE "norteste" :E "este" :SE "sudeste" :S "sur" :SW "sudoeste" :W "oeste" :NW "nortoeste" :true "Si" :false "No" :destroyed "destruida" :date "fecha" :species "especie" :swift "vencejo común" :swallow "golondrina común" :martin "avión común" :pallid_swift "vencejo pálido" :red_rumped_swallow "golondrina dáurica" :height "altura (en metros): " :qty "cantidad" :destroyed_date "fecha de destrucción" :submit "enviar" :delete "borrar " :delete_entry "borrar entrada" :update "actualizar" :logged_as "session: " :update_entry "actualiza entrada"})

(defn from-spanish
  [word]
  (let [dictionary to-spanish]
    (name (first (filter (comp #{word} dictionary) (keys dictionary))))))

(defn from-english
  [word]
  (let [dictionary to-english]
    (name (first (filter (comp #{word} dictionary) (keys dictionary))))))


