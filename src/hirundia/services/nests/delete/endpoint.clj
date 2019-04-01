(ns hirundia.services.nests.delete.endpoint
  (:require
   [clojure.spec.alpha :as spec]
   [clojure.java.jdbc :as jdbc]
   [honeysql.core :as h]
   [hirundia.services.nests.delete.logic :as logic]
   [hirundia.services.nests.retrieveall.logic :as retrieveall.logic]))

(spec/def ::id nat-int?)

(spec/def ::api (spec/keys :req-un [::id]))

(defn perform [{{:keys [id]} :path-params :keys [db] :as request}]
  (let [db (->> db :pool (hash-map :datasource))
        _  (->> (logic/to-delete id)
                (h/format)
                (jdbc/execute! db))]
    {:status 302 :headers {"Location" "/nests"} :body "" :flash (str "Entry " id " has beed deleted.")}))
