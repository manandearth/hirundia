(ns hirundia.core ^:figwheel-always
  (:require [reagent.core :as r]
            ))
(enable-console-print!)

(println "Figwheel is alive!")

(js/console.log "232")

;(js/alert "boo!")

(def test-atom (r/atom 1))

(swap! test-atom inc)

(defn base-element []
  [:div [:h2 (str  "test-atom value is: " (swap! test-atom inc) )]
   ])

(defn ^:export main []
  (r/render 
    [base-element]
    (.getElementById js/document "app")))


(defn on-js-reload []
  (main))
(main)
