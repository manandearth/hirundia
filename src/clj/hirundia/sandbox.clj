(ns hirundia.sandbox
  (:require
   [clj-postgresql.core :as pg]
   ;[clojure.data.json :as json]
   [clojure.java.jdbc :as jdbc]
   [honeysql.core :as sql]
   [honeysql.helpers :as helpers :refer :all :exclude [update]]
   [java-time :refer :all
    :exclude [format update contains? iterate range min max zero?]]
   [clojure.string :as string]))

(def today (sql-date (local-date)))

;HERE db connection before component
(def conn {:dbtype "postgresql"
           :dbname "hirundia_dev"
           :host "localhost"
           :user "postgres"
           :password "postgres"})

;; (jdbc/query conn "select * from nests")


;HERE the db uri-connection string that JDBC is happy eith
(def dbspec "postgresql://postgres:postgres@localhost:5432/postgres")

;;HERE (unencessary) make the uri string from request-map since I don't know how to use the PG component yet...
(defn extract-uri [db]
  (let [p db
        p-vec (clojure.string/split (:url p)  #"/")]
    (str (first p-vec) "//" (get p-vec 3) ":" (get p-vec 3) "@" (get p-vec 2) "/" (get p-vec 3))))

;;HERE simplest db-query, just to wire regardless of PG component
(defn comp-db-q [db]
  (let [uri (extract-uri db)]
    (jdbc/query uri (sql/format {:select [:*]
                                 :from [:nests]
                                 :where [:= :species "penguin"]}))))

(defn create-nest-table []
  (jdbc/db-do-commands conn
                       (jdbc/create-table-ddl
                        :nests
                        [[:id "serial PRIMARY KEY"]
                         [:street "varchar(64)"]
                         [:number "int"]
                         [:gps "point"] ;-> (pg/point <float><float>)
                         [:species "varchar(64)"]
                         [:height "int"]
                         [:facing "varchar(32)"]
                         [:type "varchar(100)"]
                         [:date "date"]
                         [:destroyed "boolean"]
                         [:destroyed_date "date"]])))

(defn add-nest [entry]
  (jdbc/insert! conn :nests entry))

;;first method attempt:
(defn insert-nest!
  [entry-map]
  (let [entry {:street (:street entry-map)
               :number (:number entry-map)
               :gps (:gps entry-map)
               :species (:species entry-map)
               :height (:height entry-map)
               :facing (:facing entry-map)
               :type (:type-of entry-map)
               :date (:date entry-map)
               :destroyed (:destroyed entry-map)
               :destroyed_date (:destroyed_date entry-map)}]
    (jdbc/insert! conn :nests entry)))

;;Here the JDBC query that will use the PG component
(defn insert-nest2!
  [entry-map db]
  (let [entry {:street (:street entry-map)
               :number (:number entry-map)
               :gps (:gps entry-map)
               :species (:species entry-map)
               :height (:height entry-map)
               :facing (:facing entry-map)
               :type (:type-of entry-map)
               :date (:date entry-map)
               :destroyed (:destroyed entry-map)
               :destroyed_date (:destroyed_date entry-map)}]
    (jdbc/insert! (extract-uri db) :nests entry)))

;;HONEYSQL

(def sqlmap {:select [:id :street :number]
             :from [:nests]
             :where [:> :id 1]})

(def test-map (-> (insert-into :nests)
                  (columns :street :number :gps :species :height :facing :type :date :destroyed :destroyed-date)
                  (values
                   [["Altozano"  1  (pg/point 36.25371 -5.96582) "swallow" 6 "NW" "window" today false nil]
                    ["Altozano"  1  (pg/point 36.25371 -5.96582) "swallow" 6 "NW" "window" today false nil]
                    ["Altozano"  1  (pg/point 36.25371 -5.96582) "swallow" 6 "NW" "window" today false nil]
                    ["Altozano" 4  (pg/point 36.25368 -5.96599) "swift" 7 "NW" "balcony" today false nil]
                    ["Altozano" 3  (pg/point 36.25379 -5.96626) "swallow" 6 "NW" "gable" today false nil]
                    ["Altozano" 3  (pg/point 36.25379 -5.96626) "swallow" 6 "NW" "gable" today false nil]
                    ["Altozano" 3  (pg/point 36.25379 -5.96626) "swallow" 6 "NW" "gable" today false nil]
                    ["Altozano" 3  (pg/point 36.25379 -5.96626) "swallow" 6 "NW" "gable" today false nil]
                    ["Altozano" 9  (pg/point 36.25359 -5.96548) "swift" 12 "N" "window" today false nil]
                    ["Altozano" 2  (pg/point 36.25359 -5.96531) "swallow" 6 "NW" "gable" today false nil]
                    ["Altozano" 2  (pg/point 36.25359 -5.96531) "swallow" 6 "NW" "gable" today false nil]
                    ["Mereced" 2 (pg/point 36.25405 -5.9616) "swallow" 5 "NW" "cornice" today false nil]
                    ["Mereced" 4 (pg/point 36.25404, -5.96165) "swallow" 6 "N"  "cornice" today false nil]
                    ["Mereced" 4 (pg/point 36.25404, -5.96165) "swallow" 6 "N"  "cornice" today false nil]
                    ["Mereced" 4 (pg/point 36.25404, -5.96165) "swallow" 6 "N"  "cornice" today false nil]
                    ["Mereced" 4 (pg/point 36.25404, -5.96165) "swallow" 6 "N"  "cornice" today false nil]
                    ["Mereced" 4 (pg/point 36.25404, -5.96165) "swallow" 6 "N"  "cornice" today false nil]
                    ["Retiro" 2 (pg/point 36.25458 -5.96292) "swallow" 8 "NE" "cables" today false nil]
                    ["Retiro" 2 (pg/point 36.25458 -5.96292) "swallow" 8 "NE" "cables" today false nil]
                    ["Retiro" 2 (pg/point 36.25458 -5.96292) "swallow" 8 "NE" "cables" today false nil]
                    ["Retiro" 1 (pg/point 36.25456 -5.96316) "swift" 9 "NW" "crack" today false nil]
                    ["Retiro" 1 (pg/point 36.25456 -5.96316) "swift" 9 "NW" "crack" today false nil]
                    ["Retiro" 1 (pg/point 36.25456 -5.96316) "swift" 9 "NW" "crack" today false nil]
                    ["Plazuela" 5 (pg/point 36.25434 -5.96551) "swallow" 9 "NW" "window" today false nil]
                    ["Plazuela" 5 (pg/point 36.25434 -5.96551) "swallow" 9 "NW" "window" today false nil]
                    ["Plazuela" 5 (pg/point 36.25434 -5.96551) "swallow" 9 "NW" "window" today false nil]
                    ["Plazuela" 5 (pg/point 36.25434, -5.96551) "swallow" 9 "NW" "window" today false nil]
                    ["Plazuela" 2 (pg/point 36.25444 -5.96559) "swallow" 8 "NW" "cornice" today false nil]
                    ["Plazuela" 2 (pg/point 36.25444 -5.96559) "swallow" 8 "NW" "cornice" today false nil]
                    ["Plazuela" 2 (pg/point 36.25444 -5.96559) "swallow" 8 "NW" "cornice" today false nil]
                    ["Rosario" 6 (pg/point 36.25299 -5.96352) "swift" 6 "N" "gable" today false nil]
                    ["Rosario" 6 (pg/point 36.25299 -5.96352) "swift" 6 "N" "gable" today false nil]
                    ["Rosario" 6 (pg/point 36.25299 -5.96352) "swift" 6 "N" "gable" today false nil]
                    ["Rosario" 3 (pg/point 36.25307 -5.96359) "swift" 4 "N" "gable" today false nil]
                    ["Rosario" 1 (pg/point 36.25262 -5.96331) "swallow" 6 "NE" "crack" today false nil]
                    ["Rosario" 1 (pg/point 36.25262 -5.96331) "swallow" 6 "NE" "crack" today false nil]
                    ["Rosario" 1 (pg/point 36.25262 -5.96331) "swallow" 6 "NE" "crack" today false nil]
                    ["Rosario" 2 (pg/point 36.25319 -5.96368) "swallow" 7 "NW" "crack" today false nil]
                    ["Juan Bueno" 4 (pg/point 36.25319 -5.96485) "swift" 6 "NW" "cornice" today false nil]
                    ["Juan Bueno" 4 (pg/point 36.25319 -5.96485) "swift" 6 "NW" "cornice" today false nil]
                    ["Juan Bueno" 4 (pg/point 36.25319 -5.96485) "swift" 6 "NW" "cornice" today false nil]
                    ["Juan Bueno" 5 (pg/point 36.25319 -5.9649) "swift" 6 "NW" "cornice" today false nil]
                    ["Juan Bueno" 3 (pg/point 36.2528, -5.96454) "swift" 5 "N" "window" today false nil]
                    ["Juan Bueno" 3 (pg/point 36.2528, -5.96454) "swift" 5 "N" "window" today false nil]
                    ["Juan Bueno" 3 (pg/point 36.2528, -5.96454) "swift" 5 "N" "window" today false nil]
                    ["Juan Bueno" 1 (pg/point 36.25238, -5.96424) "swallow" 5 "N" "crack" today false nil]
                    ["Juan Bueno" 1 (pg/point 36.25238, -5.96424) "swallow" 5 "N" "crack" today false nil]])
                  sql/format))

#_(jdbc/with-db-transaction [db conn] ;makes sure that the transaction is carried only if there are no errors, cool!
    (jdbc/execute!
     db
     test-map))

(def select-all-query
  (jdbc/query conn (sql/format  {:select [:*]
                                 :from [:nests]})))

(defn insert-entry [address]
  (let [results
        (jdbc/execute! conn
                       (-> (insert-into :nests)
                           (columns :address)
                           (values [[address]])
                           sql/format)
                       {:return-keys ["id" "address"]})]
    (assert (= (count results) 2))
    results))

(defn to-query [species]
  {:select [:*]
   :from [:nests]
   :where [:= :species species]})
