(ns hirundia.services.nests.retrieve.endpoint
  (:require
   [cheshire.generate]
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [ring.util.response :as ring-resp]
   [buddy.auth :refer [authenticated? throw-unauthorized]]
   [honeysql.core :as h]
   [hirundia.views :as views]
   [hirundia.services.nests.retrieve.logic :as logic]
   [hirundia.services.nests.retrieve.view :as view]
   [hirundia.services.session.login.endpoint :as session.login])

  (:import
   [org.postgresql.jdbc4 Jdbc4Array]))

(cheshire.generate/add-encoder Jdbc4Array (fn [c json-generator]
                                            (-> c .getArray (cheshire.generate/encode-seq json-generator))))

(spec/def ::id nat-int?)

(spec/def ::api (spec/keys :req-un [::id]))

(defn perform [{{:keys [id]} :path-params :keys [db session] :as request}]
  (let [db     (->> db :pool (hash-map :datasource))
        record (->> (logic/to-query id)
                    (h/format)
                    (jdbc/query db)
                    (first))]
    (if record
      (ring-resp/response (view/update-entry request id record))
      (ring-resp/not-found "Not in DB"))))

(defn get-author [{{:keys [id]} :path-params :keys [db] :as request}]
  (let [db     (->> db :pool (hash-map :datasource))
        record (->> (logic/get-author id)
                    (h/format)
                    (jdbc/query db)
                    (first)
                    (:author))]
    record))
