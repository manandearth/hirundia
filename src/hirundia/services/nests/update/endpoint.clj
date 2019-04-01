(ns hirundia.services.nests.update.endpoint
  (:require
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [java-time :refer :all :exclude [contains? iterate max zero? format min max range]]
   [clj-postgresql.core :as pg]
   [hirundia.services.nests.update.logic :as logic]
   #_[hirundia.services.nests.retrieve-all.logic :as retrieve-all.logic]
   [hirundia.services.nests.update.view :as view]
   [clojure.string :as string]))


;(spec/def ::street (spec/and string? (complement string/blank?)))

;(spec/def ::api (spec/keys :req-un [::street]))

(spec/def ::street         string?)
(spec/def ::number         nat-int?)
(spec/def ::lat            float?)
(spec/def ::lon            float?)
(spec/def ::species        #{"swallow" "swift" "martin"})
(spec/def ::height         nat-int?)
(spec/def ::facing         #{"N" "NW" "W" "SW" "S" "SE" "E" "NE"})
(spec/def ::type-of        #{"roof" "pergola"}) ;TODO extend this set
(spec/def ::date           inst?) 
(spec/def ::destroyed      (spec/or :bool boolean? :empty empty?))
(spec/def ::destroyed_date (spec/or :inst inst? :empty empty?)) 

#_(spec/valid? ::date (sql-date (local-date)))


(spec/def ::api (spec/keys :req-un [::facing ::street ::type-of ::height ::lat ::lon ::number ::destroyed ::species ::date #_::destroyed_date])) ;TODO need to extend



(defn perform [{{:keys [street number lon lat species height facing type-of date destroyed destroyed_date]} :form-params {:keys [id]} :path-params :keys [db] :as request}]


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
                    :destroyed_date (if (inst? destroyed_date)
                                      (sql-date destroyed_date)
                                      nil)
                    }
        db     (->> db :pool (hash-map :datasource))
        update (-> (logic/to-update parsed-map  (Integer/parseInt id))
                   (h/format))
        _      (jdbc/execute! db update)]
   {:status 302 :headers {"Location" "/nests"} :body "" :flash (str "Entry " id " has been updated")}))
