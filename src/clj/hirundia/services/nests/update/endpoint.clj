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
   [hirundia.translate :as t]
   [clojure.string :as string]
   [hirundia.models.form :as models.form]
   [hirundia.views :as views]
   [io.pedestal.http.route :refer [url-for]]))

;(spec/def ::api (spec/keys :req-un [::street]))
(spec/def ::api  (spec/keys :req-un [::models.form/language ::models.form/facing ::models.form/street ::models.form/type_of ::models.form/height ::models.form/lat ::models.form/lon ::models.form/house_number_name ::models.form/destroyed ::models.form/species ::models.form/qty ::models.form/date #_::destroyed_date])) ;TODO need to extend

(defn perform [{{:keys [language street house_number_name lon lat species height facing type_of date destroyed destroyed_date]} :form-params {:keys [id]} :path-params :keys [db session] :as request}]
  (let [spanish? (= language "spanish")
        parsed-map {:street         street
                    :house_number_name         house_number_name
                    :gps            (pg/point (list lat lon))
                    :species        (if spanish? (t/from-spanish species) species)
                    :height         height
                    :facing         (if spanish? (t/from-spanish facing) facing)
                    :type_of           (if spanish? (t/from-spanish type_of) type_of)
                    :date           (sql-date date)
                    :destroyed      (if spanish? (symbol (t/from-spanish destroyed)) (if (boolean? destroyed) destroyed false))
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
