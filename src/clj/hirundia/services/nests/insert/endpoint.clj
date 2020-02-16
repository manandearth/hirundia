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
   [java-time :refer :all
    :exclude [format update contains? iterate range min max zero?]]
   [clojure.java.io :as io]))
(spec/def ::language       string?)
(spec/def ::street         string?)
(spec/def ::house_number_name         string?)
(spec/def ::lat            double?)
(spec/def ::lon            double?)
(spec/def ::species        (eval (clojure.set/union (set (map #(t/to-spanish %) [:swallow :swift :martin])) #{"swallow" "swift" "martin"})))
(spec/def ::height         nat-int?)
(spec/def ::facing         (eval (clojure.set/union (set (map #(t/to-spanish %) [:N :NW :W :SW :S :SE :E :NE])) #{"N" "W" "SW" "S" "SE" "E" "NE"})))
(spec/def ::type-of        (eval (clojure.set/union (set (map #(t/to-spanish %) [:balcony :window :cornice :gable :cables :crack])) #{"balcony" "window" "cornice" "gable" "cables" "crack"})))
(spec/def ::date           inst?)
(spec/def ::qty            int?)
(spec/def ::destroyed      (spec/or :bool boolean? :empty empty? :set #{"Si" "No"}))
(spec/def ::destroyed_date (spec/or :inst inst? :empty empty?))
#_(spec/valid? ::date (sql-date (local-date)))

(spec/def ::api  (spec/keys :req-un [::language ::facing ::street ::type-of ::height ::lat ::lon ::house_number_name ::destroyed ::species ::qty ::date #_::destroyed_date])) ;TODO need to extend

(defn perform [{{:keys [language street house_number_name lon lat species height facing type-of date qty destroyed destroyed_date]} :form-params :keys [db session] :as request}]
  (let [spanish? (= language "spanish")
        parsed-map {:street         street
                    :house_number_name         house_number_name
                    :gps            (pg/point (list lat lon))
                    :species        (if spanish? (t/from-spanish species) species)
                    :height         height
                    :facing         (if spanish? (t/from-spanish facing) facing)
                    :type           (if spanish? (t/from-spanish type-of) type-of)
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

