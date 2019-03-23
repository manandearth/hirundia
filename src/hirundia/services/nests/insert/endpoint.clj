(ns hirundia.services.nests.insert.endpoint
  (:require
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [clj-postgresql.core :as pg]
   [clojure.string :as string]
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

(defn perform [{{:keys [street number lon lat species height facing type-of date destroyed destroyed_date]} :form-params :keys [db] :as request}]
  (let [parsed-map {:street street
                    :number (Integer/parseInt number)
                    :gps (pg/point (list (Float/parseFloat lat) (Float/parseFloat lon)))
                    :species species
                    :height (Integer/parseInt height)
                    :facing facing
                    :type  type-of
                    :date (sql-date (clj-time.format/parse (clj-time.format/formatters :date) date))
                    :destroyed (if (string/blank? destroyed) false (read-string destroyed))
                    :destroyed_date (if (empty? destroyed_date) nil (sql-date (clj-time.format/parse (clj-time.format/formatters :date) destroyed_date)))
                    }
        db     (->> db :pool (hash-map :datasource))
        insert (-> (logic/to-insert parsed-map)
                   (h/format))
        ;fetch  (h/format logic/to-query)
        _      (jdbc/execute! db insert)
        ;; result (-> (jdbc/query db fetch)
        ;; (logic/to-serialize))
    ]
    {:status 302 :headers {"Location" "/nests"} :body ""}))
