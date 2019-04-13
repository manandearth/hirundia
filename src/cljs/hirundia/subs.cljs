(ns hirundia.subs
  (:require
   [re-frame.core :refer [reg-sub subscribe reg-fx]]))

(reg-sub
 ::name
 (fn [db]
   (:name db)))

;;RETURNS THE VALUE OF THE KEY :data
(reg-sub
 ::data
 (fn [db]
    (:data db)))

(reg-sub
 ::selected-attr
 (fn [db]
   (:selected-attr db)))
