(ns hirundia.services.session.admin.endpoint
  (:require
   [cheshire.generate]
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [cognitect.transit :as transit]
   [honeysql.core :as h]
   [io.pedestal.http.route :refer [url-for]]
   [ring.util.response :as ring-resp]
   [hirundia.models.user :as models.user]
   [hirundia.services.session.admin.logic :as logic]
   [hirundia.services.session.admin.view :as view])
  (:import
   [org.postgresql.jdbc4 Jdbc4Array]))

(cheshire.generate/add-encoder Jdbc4Array (fn [c json-generator]
                                            (-> c .getArray (cheshire.generate/encode-seq json-generator))))

(defn perform [{:keys [db] :as request}]
  (let [db (->> db :pool (hash-map :datasource))
        records (->> (logic/to-query)
                     (h/format)
                     (jdbc/query db))]
    (ring-resp/response (view/all-users request records))))

(defn to-cljs [{:keys [db] :as request}]
  (let [db (->> db :pool (hash-map :datasource))
        records (->> (logic/to-query)
                     (h/format)
                     (jdbc/query db))]
    (-> (ring-resp/response records)
        (assoc :headers {"Access-Control-Allow-Origin" "*"
                         "Access-Control-Allow-Headers" "Content-Type"}))))


