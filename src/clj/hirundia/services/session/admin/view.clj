(ns hirundia.services.session.admin.view
  (:require [hiccup.page :as page]
            [hiccup.table :as table]
            [hirundia.views :as views]
            [hirundia.translate :as t]
            [io.pedestal.http.route :refer [url-for]]))

(defn records-to-spanish
  [records]
  (map #(assoc % :username (t/to-spanish (keyword (str (:username %)))))
       (map #(assoc % :role (t/to-spanish (keyword (:role %))))
            (records))))

(defn all-users [{:keys [flash] :as request} records]
  (page/html5
   (views/gen-page-head "Listado de usuarios")
   (views/header-links request)
   [:div {:class "container"}
    (when (seq flash) [:div {:class "alert alert-warning alert-dismissible fade show" :role "alert"} flash
                       [:button {:type "button" :class "close" :data-dismiss "alert" :aria-label "Close"}
                        [:span {:aria-hidden "true"} "&times;"]]])
    [:p {:class "h2"} "Users"]
    [:div (let [attr-fns {:data-value-transform (fn [label-key v]
                                                  (if (= :id label-key)
                                                    [:a {:href (url-for :nests/:id :path-params {:id v})} v]

                                                    (if (= :delete label-key)
                                                      [:a {:href (url-for :nests-delete/:id :path-params {:id v})} (str (t/to-spanish :delete) v)]
                                                      v)))}
                extended-records (map #(assoc % :delete (:id %)) records)]
            (table/to-table1d
             extended-records
             [:username (t/to-spanish :username)
              :role (t/to-spanish :role)]
             attr-fns))]]))
