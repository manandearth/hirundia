(ns hirundia.services.nests.retrieveall.endpoint
  (:require
   [cheshire.generate]
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [hirundia.services.nests.retrieveall.logic :as logic]
   [hirundia.services.nests.retrieveall.view :as view]
   )
  (:import
   [org.postgresql.jdbc4 Jdbc4Array]))

(cheshire.generate/add-encoder Jdbc4Array (fn [c json-generator]
                                            (-> c .getArray (cheshire.generate/encode-seq json-generator))))

#_(spec/def ::id nat-int?)

#_(spec/def ::api (spec/keys :req-un [::id]))

(defn perform [{{:keys [id]} :path-params :keys [db] :as request}]
  (let [db (->> db :pool (hash-map :datasource))
        records (->> (logic/to-query)
                    (h/format)
                    (jdbc/query db))]
    {:status 200 :body (view/all-invoices records)}))

