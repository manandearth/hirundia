(ns hirundia.services.nests.insert.endpoint
  (:require
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [clj-postgresql.core :as pg]
   [clojure.string :as string]
   [ring.util.response :as ring-resp]
   [io.pedestal.http.route :refer [url-for]]
   [hirundia.services.nests.insert.logic :as logic]
   [hirundia.translate :as t]
   [hirundia.models.form :as models.form]
   [java-time :refer :all
    :exclude [format update contains? iterate range min max zero?]]
   [clojure.java.io :as io]))

(spec/def ::api  (spec/keys :req-un [::models.form/language ::models.form/facing ::models.form/street ::models.form/type_of ::models.form/height ::models.form/lat ::models.form/lon ::models.form/house_number_name ::models.form/destroyed ::models.form/species ::models.form/qty ::models.form/date #_::destroyed_date])) ;TODO need to extend

(defn perform [{{:keys [language street house_number_name lon lat species height facing type_of date qty destroyed destroyed_date]} :form-params :keys [db session] :as request}]
  (let [spanish? (= language "spanish")
        parsed-map {:street         street
                    :house_number_name         house_number_name
                    :gps            (pg/point (list lat lon))
                    :species        (if spanish? (t/from-spanish species) species)
                    :height         height
                    :facing         (if spanish? (t/from-spanish facing) facing)
                    :type           (if spanish? (t/from-spanish type_of) type_of)
                    :date           (sql-date date)
                    :destroyed      (if spanish? (symbol (t/from-spanish destroyed)) (if (boolean? destroyed)
                                                                                       destroyed
                                                                                       false))
                    :destroyed_date (if (empty? destroyed_date)
                                      nil
                                      (sql-date destroyed_date))
                    :author (get-in session [:identity :username])}

        db     (->> db :pool (hash-map :datasource))
        insert (-> (logic/to-insert parsed-map)
                   (h/format))]
    (doseq [q (range qty)] (jdbc/execute! db insert))
    (-> (ring-resp/redirect (url-for :nests))
        (assoc :flash "Entry added to db"))))

