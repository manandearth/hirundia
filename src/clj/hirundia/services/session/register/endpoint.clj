(ns hirundia.services.session.register.endpoint
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.spec.alpha :as spec]
            [honeysql.core :as h]
            [io.pedestal.http.route :refer [url-for]]
            [ring.util.response :as ring-resp]
            [hirundia.models.user :as models.user]
            [hirundia.services.session.register.logic :as logic]))

(spec/def ::username (spec/and string? (spec/nilable not-empty)))
(spec/def ::password (spec/and string? (spec/nilable not-empty)))
(spec/def ::api (spec/keys :req-un [::username ::password]))

(defn perform  [{{:keys [username password]} :form-params :keys [db] :as request}]
  (let [db     (->> db :pool (hash-map :datasource))
        query (-> (logic/to-check username)
                  (h/format))
        check (jdbc/query db query)
        insert (-> (logic/to-insert username
                                    (logic/derive-password password))
                   (h/format))]
    (if (empty? check)
      (do (jdbc/execute! db insert)
          (-> (ring-resp/redirect (url-for :login))
              (assoc  :flash (str  username ", You are registered. Please login"))))

      (-> (ring-resp/redirect (url-for :register))
          (assoc  :flash (str  "username already taken, choose another"))))))
