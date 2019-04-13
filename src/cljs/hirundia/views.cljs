(ns hirundia.views
  (:require
   [re-frame.core :refer [subscribe dispatch]]
   [hirundia.subs :as subs]
   [hirundia.events :as events]
   [reagent.core :as r]
   [re-frame.core :as re-frame]))









(defn main-panel []
  (let [title         (subscribe [::subs/name])
        data          (subscribe [::subs/data])
        selected-attr (subscribe [::subs/selected-attr])]
    [:div
     [:h1 @title]
     [:p  (str "data: " @data)]
     [:p  (str "selected attribure is: " (name @selected-attr))]]))

