(ns hirundia.db ^:figwheel-always
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
   [ajax.core :refer [GET POST]]
   [cljs.core.async :refer [<! >! chan put! take! put!]]
   [reagent.core :as r]
   ))

(def df2  (atom nil))
#_(defn component []
  (GET "/transit"
       :handler (fn [response]
                  (reset! df2 (:body response))))
 @df2 )

(def my-atom (atom {}))

(def default-db 
  {:name "nests"
   :data @my-atom
   :selected-attr :gps})

(:data default-db) 

