(ns hirundia.services.viz.geo.logic)

(defn get-entries []
  {:select [:*]
   :from [:nests]})
