(ns hirundia.services.session.login.logic
  (:require
   [buddy.hashers :as hashers]
   [honeysql.core :as h]
   [honeysql.helpers :refer :all :exclude [update]]))

(defn to-query [username password]
  (-> (select :*)
      (from   :register)
      (where  [:= :username username] [:= :password password])))

(defn query-pass-by-user [username]
  (-> (select :encrypted_password)
      (from :register)
      (where [:= :username username])))

(defn check-password [password encrypted]
  (hashers/check password encrypted))

;;TODO -> this has to go!
(defn query-username-password-role [username]
  (-> (select :*)
      (from :register)
      (where [:= :username username])))

(defn role [username]
  (-> (select :role)
      (from :register)
      (where [:= :username username])))
