(ns hirundia.services.nests.update.endpoint
  (:require
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [java-time :refer :all :exclude [contains? iterate max zero? format min max range]]
   [clj-postgresql.core :as pg]
   [ring.util.response :as ring-resp]
   [hirundia.services.nests.update.logic :as logic]
   #_[hirundia.services.nests.retrieve-all.logic :as retrieve-all.logic]
   [hirundia.services.nests.update.view :as view]
   [clojure.string :as string]
   [hirundia.views :as views]
   [io.pedestal.http.route :refer [url-for]]))


;(spec/def ::street (spec/and string? (complement string/blank?)))

;(spec/def ::api (spec/keys :req-un [::street]))


(spec/def ::street         string?)
(spec/def ::house_number_name         string?)
(spec/def ::lat            double?)
(spec/def ::lon            double?)
(spec/def ::species        #{"swallow" "swift" "martin"})
(spec/def ::height         nat-int?)
(spec/def ::facing         #{"N" "NW" "W" "SW" "S" "SE" "E" "NE"})
(spec/def ::type-of        #{"balcony" "window" "cornice" "gable" "cables" "crack"})
(spec/def ::date           inst?)
(spec/def ::destroyed      (spec/or :bool boolean? :empty empty?))
(spec/def ::destroyed_date (spec/or :inst inst? :empty empty?))

#_(spec/valid? ::date (sql-date (local-date)))

(spec/def ::api (spec/keys :req-un [::facing ::street ::type-of ::height ::lat ::lon ::house_number_name ::destroyed ::species ::date #_::destroyed_date])) ;TODO need to extend


(defn perform [{{:keys [street house_number_name lon lat species height facing type-of date destroyed destroyed_date]} :form-params {:keys [id]} :path-params :keys [db session] :as request}]
  (let [parsed-map {:street         street
                    :house_number_name         house_number_name
                    :gps            (pg/point (list lat lon))
                    :species        species
                    :height         height
                    :facing         facing
                    :type-of           type-of
                    :date           (sql-date date)
                    :destroyed      destroyed
                    :destroyed_date (if (empty? destroyed_date)
                                      nil
                                      (sql-date destroyed_date))}
        db     (->> db :pool (hash-map :datasource))
        update (-> (logic/to-update parsed-map  (Integer/parseInt id))
                   (h/format))]
    (jdbc/execute! db update)
    (-> (ring-resp/redirect (url-for :nests))
        (assoc :flash (str "Entry " id " has been updated")))
    #_{:status 302 :headers {"Location" "/nests"} :body "" :flash (str "Entry " id " has been updated")}))
