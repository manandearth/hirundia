(ns hirundia.services.nests.insert.logic
  (:require
   [honeysql.core :as h]
   [honeysql.helpers :as hh]))

(defn to-insert [entry-map]
  (-> (hh/insert-into :nests)
      (hh/values [entry-map])))

