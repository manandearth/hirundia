(ns hirundia.services.nests.insert.endpoint
  (:require
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [hirundia.services.nests.insert.logic :as logic]
   [java-time :refer :all
     :exclude [format update contains? iterate range min max zero?]
    ]))

(spec/def ::street string?)
(spec/def ::number nat-int?)
(spec/def ::lat float?)
(spec/def ::lon float?)
(spec/def ::species (spec/and keyword? #{"swallow" "swift" "martin"}))
(spec/def ::height nat-int?)
(spec/def ::facing (spec/and keyword? #{"N" "NW" "W" "SW" "S" "SE" "E" "NE"}))
(spec/def ::type-of (spec/and keyword? #{"roof" "pergola"})) ;TODO extend this set
(spec/def ::date inst?) 
(spec/def ::destroyed boolean?)
(spec/def ::destroyed_date inst?) 

#_(spec/valid? ::date (sql-date (local-date)))

(spec/def ::api (spec/keys :req-un [::street ::number ::height])) ;TODO need to extend

(defn perform [{{:keys [amount]} :query-params :keys [db] :as request}]
  (let [db     (->> db :pool (hash-map :datasource))
        insert (-> (logic/to-insert amount (java.util.UUID/randomUUID))
                   (h/format))
        fetch  (h/format logic/to-query)
        _      (jdbc/execute! db insert)
        result (-> (jdbc/query db fetch)
                   (logic/to-serialize))]
    {:status 200
     :body   result}))
