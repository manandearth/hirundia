(ns hirundia.services.nests.delete.logic
  (:require
   [honeysql.helpers :as hh]))

(defn to-delete [id]
  {:delete-from :nests
   :where [:= :id id]})


(defn to-serialize []
  {:select [:%count.*]
   :from   [:nests]})
