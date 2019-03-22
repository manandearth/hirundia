(ns hirundia.services.nests.retrieveall.view
  (:require [hiccup.page :as page]
            [hiccup.table :as table]
            [hirundia.views :as views]))

(defn all-invoices [records]
  (page/html5
   (views/gen-page-head "Complete List of Entries")
   views/header-links
   [:div
    [:h1 "Complete List Of Entries"]
    [:div (let [attr-fns {:data-value-transform (fn [label-key v]
                                                  (if (= :id label-key)
                                                    [:a {:href (str "/nests/" v)} v]
                                                    
                                                    (if (= :delete label-key)
                                                      [:a {:href (str "/nests-delete/")} (str "delete " v) ]
                                                      v)))}
                extended-records (map #(assoc % :delete (:id %)) records)]
            (table/to-table1d
             extended-records
             [:id "ID" :street "Street" :number "No." :gps "GPS" :species "Species" :facing "Facing" :height "Height" :type "Type" :date "Date"  :destroyed "Destroyed?" :destroyed_date "Date destroyed" :delete "Delete Entry"]
             attr-fns))]]))
