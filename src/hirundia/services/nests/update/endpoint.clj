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

(defn perform [{{:keys [street number lon lat species height facing type-of date destroyed destroyed_date]} :form-params {:keys [id]} :path-params :keys [db] :as request}]


  (let [parsed-map {:street street
                    :number (Integer/parseInt number)
                    :gps (pg/point (list (Float/parseFloat lat) (Float/parseFloat lon)))
                    :species species
                    :height (Integer/parseInt height)
                    :facing facing
                    :type-of  type-of
                    :date (sql-date (clj-time.format/parse (clj-time.format/formatters :date) date))
                    :destroyed (if (string/blank? destroyed) false (read-string destroyed))
                    :destroyed_date (if (empty? destroyed_date) nil (sql-date (clj-time.format/parse (clj-time.format/formatters :date) destroyed_date)))
                    }
        db     (->> db :pool (hash-map :datasource))
        update (-> (logic/to-update parsed-map  (Integer/parseInt id))
                   (h/format))
        _      (jdbc/execute! db update)]
   {:status 302 :headers {"Location" "/nests"} :body ""}))
