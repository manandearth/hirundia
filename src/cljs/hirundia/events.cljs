(ns hirundia.events
  (:require
   [re-frame.core :refer [reg-event-db reg-event-fx reg-fx subscribe debug]]
   [ajax.core :as ajax] 
   [hirundia.db :as db]))

(reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(reg-event-db
 :select-attr
 (fn [db [_ attr]]
   (assoc db :selected-attr attr)))

(reg-event-fx
  ::http-get
  (fn [_world [_ val]]
    {:http-xhrio {:method          :get
                  :uri             "/transit"
                 ; :params          data
                  :timeout         5000
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [::good-get-result]
                  :on-failure      [::bad-get-result]}}))


