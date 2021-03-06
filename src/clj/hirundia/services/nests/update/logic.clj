(ns hirundia.services.nests.update.logic
  (:require
   [honeysql.core :as h]
   [honeysql.helpers :as hh]))

(defn to-update [entry id]
  (-> (hh/update :nests)
      (hh/sset  {:street (:street entry)
                 :house_number_name (:house_number_name entry)
                 :gps (:gps entry)
                 :species (:species entry)
                 :height (:height entry)
                 :facing (:facing entry)
                 :type (:type_of entry)
                 :date (:date entry)
                 :destroyed (:destroyed entry)
                 :destroyed_date (:destroyed_date entry)})
      (hh/where [:= :id id])))

#_(def to-query
    {:select   [:id :email]
     :from     [:users]
     :order-by [[:id :desc]]
     :limit    1})

#_(defn to-serialize [results]
    (-> results first (select-keys [:id :email])))
