(ns hirundia.services.nests.retrieveall.view
  (:require [hiccup.page :as page]
            [hiccup.table :as table]
            [hirundia.views :as views]
            [hirundia.translate :as t]
            [io.pedestal.http.route :refer [url-for]]))

(defn records-to-spanish
  [records]
  (map #(assoc % :destroyed (t/to-spanish (keyword (str (:destroyed %)))))
       (map #(assoc % :facing (t/to-spanish (keyword (:facing %))))
            (map #(assoc % :type (t/to-spanish (keyword (:type %))))
                 (map #(assoc % :species (t/to-spanish (keyword (:species %)))) records)))))

(defn all-nests [{:keys [flash] :as request} records]
  (page/html5
   (views/gen-page-head "Listado de entradas")
   (views/header-links request)
   [:div {:class "container"}
    (when (seq flash) [:div {:class "alert alert-warning alert-dismissible fade show" :role "alert"} flash
                       [:button {:type "button" :class "close" :data-dismiss "alert" :aria-label "Close"}
                        [:span {:aria-hidden "true"} "&times;"]]])
    [:p {:class "h2"} "Entradas"]
    [:div (let [attr-fns {:data-value-transform (fn [label-key v]
                                                  (if (= :id label-key)
                                                    [:a {:href (url-for :nests/:id :path-params {:id v})} v]

                                                    (if (= :delete label-key)
                                                      [:a {:href (url-for :nests-delete/:id :path-params {:id v})} (str (t/to-spanish :delete) v)]
                                                      v)))}
                extended-records (map #(assoc % :delete (:id %)) (records-to-spanish records))]
            (table/to-table1d
             extended-records
             [:id "ID"
              :street (t/to-spanish :street)
              :house_number_name (t/to-spanish :house_number_name)
              :gps "GPS"
              :species (t/to-spanish :species)
              :facing (t/to-spanish :facing)
              :height (t/to-spanish :height)
              :type (t/to-spanish :type)
              :date (t/to-spanish :date)
              :destroyed (t/to-spanish :destroyed)
              :destroyed_date (t/to-spanish :destroyed_date)
              :delete (t/to-spanish :delete_entry)
              :author (t/to-spanish :username)]
             attr-fns))]]))
