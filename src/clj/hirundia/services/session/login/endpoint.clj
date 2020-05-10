(ns hirundia.services.session.login.endpoint
  (:require [clojure.java.jdbc :as jdbc]
            [honeysql.core :as h]
            [clojure.spec.alpha :as spec]
            [ring.util.response :as ring-resp]
            [io.pedestal.http.route :refer [url-for]]
            [hirundia.models.user :as models.user]
            [hirundia.services.session.login.logic :as logic]))

(spec/def ::api (spec/keys :req-un [::models.user/username ::models.user/password]))

(defn password-by-username [{:keys [db] :as request} username]
  (let [db (->> db :pool (hash-map :datasource))]
    (->> (logic/query-pass-by-user username)
         (h/format)
         (jdbc/query db)
         (first))))

(defn get-role [{:keys [db] :as request} username]
  (let [db (->> db :pool (hash-map :datasource))]
    (->> (logic/role username)
         (h/format)
         (jdbc/query db)
         (first))))

(defn perform [request]
  (let [username (get-in request [:form-params :username])
        password (get-in request [:form-params :password])
        session (:session request)]
    (if (logic/check-password password (:encrypted_password (password-by-username request username)))
      (let [next-url (get-in request [:query-params :next] "/")
            updated-session (assoc session :identity (conj {:username username} (get-role request username)))]
        (-> (ring-resp/redirect next-url)
            (assoc :headers (merge (:headers (ring-resp/redirect next-url) {"Access-Control-Allow-Origin" "*" "Access-Control-Allow-Headers" "Location" "Access-Control-Expose-Headers" "Location" "Location" "/"})))
            ;;TODO remove session in case of bad login
            (assoc :session updated-session)))
      (-> (ring-resp/redirect (url-for :login))
          (assoc :headers (merge (:headers (ring-resp/redirect (url-for :login)) {"Access-Control-Allow-Origin" "*" "Access-Control-Allow-Headers" "Location" "Access-Control-Expose-Headers" "Location" "Location" "/login"})))
          (assoc :flash "wrong password")))))


;;FIX -> this has to go.


(defn username-password-role [{:keys [db] :as request} username]
  (let [db (->> db :pool (hash-map :datasource))]
    (->> (logic/query-username-password-role username)
         (h/format)
         (jdbc/query db)
         (first))))
