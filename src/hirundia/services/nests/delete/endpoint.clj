(ns hirundia.services.nests.delete.endpoint
  (:require
   [clojure.spec.alpha :as spec]
   [clojure.java.jdbc :as jdbc]
   [ring.util.response :as ring-resp]
   [buddy.auth :refer [authenticated?]]
   [honeysql.core :as h]
   [hirundia.services.nests.delete.logic :as logic]
   [hirundia.services.nests.retrieveall.logic :as retrieveall.logic]))

(spec/def ::id nat-int?)

(spec/def ::api (spec/keys :req-un [::id]))

(defn perform [{{:keys [id]} :path-params :keys [db session] :as request}]
  (if (authenticated? session)
    (let [db (->> db :pool (hash-map :datasource))
          _  (->> (logic/to-delete id)
                  (h/format)
                  (jdbc/execute! db))]
      (-> (ring-resp/redirect "/nests")
          (assoc :flash (str "Entry " id " has beed deleted.")))
      #_{:status 302 :headers {"Location" "/nests"} :body "" :flash (str "Entry " id " has beed deleted.")})
    (-> (ring-resp/redirect "/nests")
        (assoc :flash "login in order to delete an entry")))
  )
