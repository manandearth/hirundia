(ns hirundia.translate)

(def to-spanish {:home "principal" :about "sobre el proyecto" :nests "listado" :dashboard "panel de control" :nests-insert "añadir nidos" :username "usuario" :password "contraseña" :register "registrarse" :login "entrar" :logout "cerrar"  :street "calle" :house_number_name "No./nombre" :lat "latitud" :lon "longitud" :type "construcción" :window "ventana" :cornice "cornisa" :crack "grieta" :cables "cable" :gable "tejado" :balcony "balcón" :facing "orientación" :N "norte" :NE "norteste" :E "este" :SE "sudeste" :S "sur" :SW "sudoeste" :W "oeste" :NW "nortoeste" :true "Si" :false "No" :destroyed "destruida" :date "fecha" :species "especie" :swift "vencejo común" :swallow "golondrina común" :martin "avión común" :pallid_swift "vencejo pálido" :red_rumped_swallow "golondrina dáurica" :height "altura" :qty "cantidad" :destroyed_date "fecha de destrucción" :submit "enviar" :delete "borrar " :delete_entry "borrar entrada" :update "actualizar" :logged_as "logado como: "})

(defn from-spanish
  [word]
  (let [dictionary to-spanish]
    (name (first (filter (comp #{word} dictionary) (keys dictionary))))))

