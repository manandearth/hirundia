(ns hirundia.services.session.register.endpoint
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.spec.alpha :as spec]
            [honeysql.core :as h]
            [io.pedestal.http.route :refer [url-for]]
            [ring.util.response :as ring-resp]
            [postal.core :as postal]
            [hirundia.services.session.register.email :as email]
            [hirundia.models.user :as models.user]
            [hirundia.services.session.register.logic :as logic]
            [ajax.ring :as ring]))

(spec/def ::username (spec/and string? (spec/nilable not-empty)))
(spec/def ::password (spec/and string? (spec/nilable not-empty)))
(spec/def ::api (spec/keys :req-un [::username ::password]))

(spec/def ::api (spec/keys :req-un [::id]))

(defn perform  [{{:keys [username password firstName lastName email]} :form-params :keys [db] :as request}]
  (let [db     (->> db :pool (hash-map :datasource))
        query (-> (logic/to-check username)
                  (h/format))
        check (jdbc/query db query)
        insert (-> (logic/to-insert username (logic/derive-password password) firstName lastName email)
                   (h/format))]
    (if (empty? check)
      (do (jdbc/execute! db insert)
          (email/send-email email)
          (-> (ring-resp/redirect (url-for :login))
              (assoc  :flash (str  username ", You are registered. Please login"))))

      (-> (ring-resp/redirect (url-for :register))
          (assoc  :flash (str  "username already taken, choose another"))))))

(defn complete [{{:keys [id]} :path-params  :keys [db] :as request}]
  (let [db     (->> db :pool (hash-map :datasource))
        update (-> (logic/complete-registration id)
                   (h/format))]
    (do (jdbc/execute! db update)
        (ring-resp/redirect (url-for :login)))))
