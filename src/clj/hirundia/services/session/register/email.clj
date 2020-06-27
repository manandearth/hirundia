(ns hirundia.services.session.register.email
  (:require
   [postal.core :as postal]))

(def body
  "Hola,
  Usted ha recibido este mensaje porque su direccion de correo se ha estado registrado con Hirundia-app,
  Para completar el registro y confirmar que esta direccion es valida confirma aqui: xxxx
  En caso contrario en que usted no ha solicitado esta peticion, disculpe no debe hacer ninguna accion, el proceso de registro no seguira sin confirmacion,
  Un saludo,
  El equipo de Hirundia.
  ")
(defn send-email [email] (postal/send-message {:host "smtp.gmail.com"
                                               :user "hirundia.app@gmail.com"
                                               :pass "Golondrina"
                                               :port 587
                                               :tls  true}
                                              {:from    "hirundia.app@gmail.com"
                                               :to      email
                                               :subject "Hirundia validation"
                                               :body    body}))

