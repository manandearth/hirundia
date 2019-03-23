(ns hirundia.services.nests.insert.logic
  (:require
   [honeysql.core :as h]
   [honeysql.helpers :as hh]))

(defn to-insert [entry-map]
  (-> (hh/insert-into :nests)
      (hh/values [entry-map])))

(def to-query
  {:select   [:id :email]
   :from     [:users]
   :order-by [[:id :desc]]
   :limit    1})

(defn to-serialize [results]
  (-> results first (select-keys [:id :email])))


