(ns hirundia.services.nests.retrieve.logic)

(defn to-query [id]
  {:select [:*]
   :from [:nests]
   :where [:= :id id]})

(defn get-author [id]
  {:select [:author]
   :from [:nests]
   :where [:= :id id]})
