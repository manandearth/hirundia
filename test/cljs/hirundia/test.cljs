(ns hirundia.test
  (:require  [cljs.test :as t :include-macros true]))

;;;--------------------
;;;STUBS
;;;--------------------

(def mock-dist
  [{:id 1 :street "Altozano" :number 1 :username "sophie" :height 7 :facing "NW" :longitude -5.96626 :latitude 36.25359 :destroyed false :destroyed_date nil :date nil :species "swallow" :type "gable"}
   {:id 2 :street "Altozano" :number 1 :username "sophie" :height 7 :facing "NW" :longitude -5.96626 :latitude 36.25159 :destroyed false :destroyed_date nil :date nil :species "swallow" :type "gable"}
   {:id 3 :street "Altozano" :number 3 :username "noah" :height 8 :facing "NW" :longitude -5.96531 :latitude 36.25259 :destroyed false :destroyed_date nil :date nil :species "swift" :type "window"}
   {:id 4 :street "Juan Bueno" :number 1 :username "noah" :height 6 :facing "N" :longitude -5.96424 :latitude 36.2532 :destroyed false :destroyed_date nil :date nil :species "swallow" :type "window"}
   {:id 5 :street "Juan Bueno" :number 2 :username "robin" :height 6 :facing "N" :longitude -5.96454 :latitude 36.2528 :destroyed false :destroyed_date nil :date nil :species "martin" :type "cornice"}])

(def my-list (quote ({:date           #inst "2019-04-04T22:00:00.000-00:00"
                      :number         4
                      :author       "robin"
                      :species        "swift"
                      :facing         "NW"
                      :type           "balcony"
                      :longitude      -5.96599
                      :street         "Altozano"
                      :id             711
                      :latitude       36.25368
                      :destroyed_date nil
                      :destroyed      false
                      :height         7}
                     {:date           #inst "2019-04-04T22:00:00.000-00:00"
                      :number         9
                      :author       "robin"
                      :species        "swift"
                      :facing         "N"
                      :type           "window"
                      :longitude      -5.96548
                      :street         "Altozano"
                      :id             716,
                      :latitude       36.25359
                      :destroyed_date nil
                      :destroyed      false
                      :height         12})))

