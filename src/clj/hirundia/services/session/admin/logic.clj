(ns hirundia.services.session.admin.logic)

(defn to-query []
  {:select [:*]
   :from [:register]})
