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
   [java-time :refer :all
    :exclude [format update contains? iterate range min max zero?]]
   [clojure.java.io :as io]))

(spec/def ::street         string?)
(spec/def ::house_number_name         string?)
(spec/def ::lat            double?)
(spec/def ::lon            double?)
(spec/def ::species        #{"swallow" "swift" "martin"})
(spec/def ::height         nat-int?)
(spec/def ::facing         #{"N" "NW" "W" "SW" "S" "SE" "E" "NE"})
(spec/def ::type-of        #{"balcony" "window" "cornice" "gable" "cables" "crack"})
(spec/def ::date           inst?)
(spec/def ::qty            int?)
(spec/def ::destroyed      (spec/or :bool boolean? :empty empty?))
(spec/def ::destroyed_date (spec/or :inst inst? :empty empty?))
#_(spec/valid? ::date (sql-date (local-date)))

(spec/def ::api (spec/keys :req-un [::facing ::street ::type-of ::height ::lat ::lon ::house_number_name ::destroyed ::species ::qty ::date #_::destroyed_date])) ;TODO need to extend

(defn perform [{{:keys [street house_number_name lon lat species height facing type-of date qty destroyed destroyed_date]} :form-params :keys [db session] :as request}]
  (let [parsed-map {:street         street
                    :house_number_name         house_number_name
                    :gps            (pg/point (list lat lon))
                    :species        species
                    :height         height
                    :facing         facing
                    :type           type-of
                    :date           (sql-date date)
                    :destroyed      (if (boolean? destroyed)
                                      destroyed
                                      false)
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

