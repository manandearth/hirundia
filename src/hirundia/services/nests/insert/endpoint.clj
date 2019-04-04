(ns hirundia.services.nests.insert.endpoint
  (:require
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [clj-postgresql.core :as pg]
   [clojure.string :as string]
   [ring.util.response :as ring-resp]
   [hirundia.services.nests.insert.logic :as logic]
   [java-time :refer :all
     :exclude [format update contains? iterate range min max zero?]
    ]))

(spec/def ::street         string?)
(spec/def ::number         nat-int?)
(spec/def ::lat            double?)
(spec/def ::lon            double?)
(spec/def ::species        #{"swallow" "swift" "martin"})
(spec/def ::height         nat-int?)
(spec/def ::facing         #{"N" "NW" "W" "SW" "S" "SE" "E" "NE"})
(spec/def ::type-of        #{"balcony" "window" "cornice" "gable" "cables" "crack"}) ;TODO extend this set
(spec/def ::date           inst?) 
(spec/def ::destroyed      (spec/or :bool boolean? :empty empty?))
(spec/def ::destroyed_date (spec/or :inst inst? :empty empty?)) 
#_(spec/valid? ::date (sql-date (local-date)))


(spec/def ::api (spec/keys :req-un [::facing ::street ::type-of ::height ::lat ::lon ::number ::destroyed ::species ::date #_::destroyed_date])) ;TODO need to extend

(defn perform [{{:keys [street number lon lat species height facing type-of date destroyed destroyed_date]} :form-params :keys [db session] :as request}]
  (let [parsed-map {:street         street
                    :number         number
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
                    :username (:identity session)
                    }
        db     (->> db :pool (hash-map :datasource))
        insert (-> (logic/to-insert parsed-map)
                   (h/format))
        ;fetch  (h/format logic/to-query)
        _      (jdbc/execute! db insert)
        ;; result (-> (jdbc/query db fetch)
        ;; (logic/to-serialize))
    ]
    (-> (ring-resp/redirect "/nests")
        (assoc :flash "Entry added to db"))
    #_{:status 302 :headers {"Location" "/nests"} :body "" :flash "Entry added to db"}))

