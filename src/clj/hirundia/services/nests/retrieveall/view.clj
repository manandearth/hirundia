(ns hirundia.services.nests.retrieveall.view
  (:require [hiccup.page :as page]
            [hiccup.table :as table]
            [hirundia.views :as views]
            [io.pedestal.http.route :refer [url-for]]))

(defn all-nests [{:keys [flash] :as request} records]
  (page/html5
   (views/gen-page-head "Listado de entradas")
   (views/header-links request)
   [:div {:class "container"}
    (when (seq flash) [:div {:class "alert alert-warning alert-dismissible fade show" :role "alert"} flash
                       [:button {:type "button" :class "close" :data-dismiss "alert" :aria-label "Close"}
                        [:span {:aria-hidden "true"} "&times;"]]])
    [:h1 "Listado de entradas"]
    [:div (let [attr-fns {:data-value-transform (fn [label-key v]
                                                  (if (= :id label-key)
                                                    [:a {:href (url-for :nests/:id :path-params {:id v})} v]

                                                    (if (= :delete label-key)
                                                      [:a {:href (url-for :nests-delete/:id :path-params {:id v})} (str "delete " v)]
                                                      v)))}
                extended-records (map #(assoc % :delete (:id %)) records)]
            (table/to-table1d
             extended-records
             [:id "ID"
              :street "Street"
              :house_number_name "No./Name"
              :gps "GPS"
              :species "Species"
              :facing "Facing"
              :height "Height"
              :type "Type"
              :date "Date"
              :destroyed "Destroyed?"
              :destroyed_date "Date destroyed"
              :delete "Delete Entry"
              :author "Username"]
             attr-fns))]]))
