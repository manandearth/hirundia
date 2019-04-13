(ns hirundia.services.nests.retrieveall.logic)

(defn to-query []
  {:select [:*]
   :from [:nests]
   })
