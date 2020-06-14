(ns hirundia.services.session.register.logic
  (:require
   [buddy.hashers :as hashers]
   [honeysql.helpers :as hh]
   [honeysql.core :as h]))

(defn to-insert [username encrypted-password first-name last-name email & [role]]
  (let [values {:username username :encrypted_password encrypted-password :first_name first-name :last_name last-name :email email}]
    (-> (hh/insert-into :register)
        (hh/values [(if-not role
                      (assoc values :role "user")
                      (assoc values :role role))]))))

(defn to-check [username]
  (-> (hh/select :username)
      (hh/from :register)
      (hh/where [:= :username username])))

(defn derive-password [password]
  (hashers/derive password))
