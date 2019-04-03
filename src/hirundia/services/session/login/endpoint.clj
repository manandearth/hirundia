(ns hirundia.services.session.login.endpoint
  (:require [clojure.java.jdbc :as jdbc]
            [honeysql.core :as h]
            [clojure.spec.alpha :as spec]
            [ring.util.response :as ring-resp]
            [hirundia.services.session.login.logic :as logic]
            [buddy.auth :refer [authenticated?]]
            [hirundia.views :as views]))

(spec/def ::username (spec/and string? (spec/nilable not-empty)))
(spec/def ::password (spec/and string? (spec/nilable not-empty)))
(spec/def ::api (spec/keys :req-un [::username ::password]))


(defn all-usernames [{:keys [db] :as request}]
  (let [db (->> db :pool (hash-map :datasource))]
    (->> (logic/query-all-usernames)
         (h/format)
         (jdbc/query db))))

(defn username-password-role [{:keys [db] :as request} username]
  (let [db (->> db :pool (hash-map :datasource))]
    (->> (logic/query-username-password-role username)
         (h/format)
         (jdbc/query db)
         (first))))

(defn password-by-username [{:keys [db] :as request} username]
  (let [db (->> db :pool (hash-map :datasource))]
    (->> (logic/query-pass-by-user username)
         (h/format)
         (jdbc/query db))))


(defn perform [request]
  (let [username (get-in request [:form-params :username])
        password (get-in request [:form-params :password])
        session (:session request)
        found-password (:password (first (password-by-username request username)))]
    (if (and found-password (= found-password password))
      (let [next-url (get-in request [:query-params :next] "/greet")
            updated-session (assoc session :identity username)]
        (-> (ring-resp/redirect next-url)
            (assoc :session updated-session)))
      (-> (ring-resp/redirect "/login")
          (assoc :flash "wrong password"))
      )))

