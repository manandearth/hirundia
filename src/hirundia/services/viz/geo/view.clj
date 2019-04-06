(ns hirundia.services.viz.geo.view
  (:require [oz.core :as oz]
            [hirundia.views :as views]
            [hiccup.page :as page]
            ))


(defn try-viz [request viz]
  (page/html5   
   (views/gen-page-head "Viz")
   (views/header-links request)
   [:h2 "Distribution of surveyed nests:"]
   (oz/html viz)))
