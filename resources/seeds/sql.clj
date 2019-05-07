(ns seeds.sql
  (:require
   [clojure.java.jdbc :as j]
   [honeysql.core :as h]
   [hirundia.services.session.register.logic :as logic]
   [java-time :refer :all
    :exclude [format update contains? iterate range min max zero?]]
   [clojure.string :as string]
   [clj-postgresql.core :as pg]))

(def today (sql-date (local-date)))

(defn run [target]
  (let [db {:connection-uri (-> target :db :url)}
        username "admin"
        password "admin"
        role "admin"
        insert (-> (logic/to-insert username (logic/derive-password password) role)
                   (h/format))]
    (do (j/execute! db insert)
        (j/insert-multi! db :nests
                         [{:street "Altozano" :number 1  :gps (pg/point 36.25371 -5.96582) :species "swallow" :height 6 :facing "NW" :type "window" :date today :destroyed false :destroyed_date nil}
                          [:street "Altozano" :number 1  :gps (pg/point 36.25371 -5.96582) :species "swallow" :height 6 :facing "NW" :type "window" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 1  :gps (pg/point 36.25371 -5.96582) :species "swallow" :height 6 :facing "NW" :type "window" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 4  :gps (pg/point 36.25368 -5.96599) :species "swift" :height 7 :facing "NW" :type "balcony" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 3  :gps (pg/point 36.25379 -5.96626) :species "swallow" :height 6 :facing "NW" :type "gable" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 3  :gps (pg/point 36.25379 -5.96626) :species "swallow" :height 6 :facing "NW" :type "gable" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 3  :gps (pg/point 36.25379 -5.96626) :species "swallow" :height 6 :facing "NW" :type "gable" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 3  :gps (pg/point 36.25379 -5.96626) :species "swallow" :height 6 :facing "NW" :type "gable" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 9  :gps (pg/point 36.25359 -5.96548) :species "swift" :height 12 :facing "N" :type "window" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 2  :gps (pg/point 36.25359 -5.96531) :species "swallow" :height 6 :facing "NW" :type "gable" :date today :destroyed false :destroyed_date nil]
                          [:street "Altozano" :number 2  :gps (pg/point 36.25359 -5.96531) :species "swallow" :height 6 :facing "NW" :type "gable" :date today :destroyed false :destroyed_date nil]]))))
