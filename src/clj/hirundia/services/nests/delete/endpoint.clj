(ns hirundia.services.nests.delete.endpoint
  (:require
   [clojure.spec.alpha :as spec]
   [clojure.java.jdbc :as jdbc]
   [ring.util.response :as ring-resp]
   [buddy.auth :refer [authenticated? throw-unauthorized]]
   [honeysql.core :as h]
   [hirundia.services.nests.delete.logic :as logic]
   [hirundia.services.nests.retrieveall.logic :as retrieveall.logic]
   [hirundia.services.session.login.endpoint :as session.login]))

(spec/def ::id nat-int?)

(spec/def ::api (spec/keys :req-un [::id]))

(defn perform [{{:keys [id]} :path-params :keys [db session] :as request}]
  (let [known-user (session.login/username-password-role request (:identity session))]
    (if (= :admin (keyword (:role known-user)))
      (let [db (->> db :pool (hash-map :datasource))
            _  (->> (logic/to-delete id)
                    (h/format)
                    (jdbc/execute! db))]
        (-> (ring-resp/redirect :nests)
            (assoc :flash (str "Entry " id " has beed deleted."))))
      (throw-unauthorized))))
