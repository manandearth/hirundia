(ns hirundia.services.nests.retrieveall.endpoint
  (:require
   [cheshire.generate]
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [hirundia.services.nests.retrieveall.logic :as logic])
  (:import
   [org.postgresql.jdbc4 Jdbc4Array]))

(cheshire.generate/add-encoder Jdbc4Array (fn [c json-generator]
                                            (-> c .getArray (cheshire.generate/encode-seq json-generator))))

#_(spec/def ::id nat-int?)

#_(spec/def ::api (spec/keys :req-un [::id]))


(defn perform [{{:keys [id]} :path-params :keys [db] :as request}]
  (let [db (->> db :pool (hash-map :datasource))
        record (->> (logic/to-query)
                    (h/format)
                    (jdbc/query db)
                    )]
    (if record
      {:status 200
       :body record}
      {:status 404})))

#_(page/html5
 (gen-page-head "Complete List of Entries")
 header-links
 [:div
  [:h1 "Complete List Of Entries"]
  [:div (table/to-table1d
         h (logic/to-query)
         [:id "ID" :street "Street" :number "No." :gps "GPS" :species "Species" :facing "Facing" :height "Height" :type "Type" :date "Date"  :destroyed "Destroyed?" :destroyed_date "Date destroyed"])]])
