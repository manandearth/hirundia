(ns hirundia.services.viz.geo.endpoint
  (:require [oz.core :as oz]
            [hiccup.page :as page]
            [hirundia.services.viz.geo.view :as view]
            [ring.util.response :as ring-resp]
            [hirundia.services.viz.geo.logic :as logic]
            [honeysql.core :as h]
            [clojure.java.jdbc :as jdbc]
            [clj-postgresql.geojson :as geojson]
            [clj-postgresql.core :as pg]
            [clojure.string :as string]
            [clojure.java.io :as io]
            [cheshire.core :as cheshire]
            ))

(defn play-data [& names]
  (for [n names
        i (range 20)]
    {:time i :item n :quantity (+ (Math/pow (* i (count n)) 0.8) (rand-int (count n)))}))

(def line-plot 
  {:data {:values (play-data "monkey" "slipper" "broom")}
   :encoding {:x {:field "time"}
              :y {:field "quantity"}
              :color {:field "item" :type "nominal"}}
   :mark "line"})

#_(defn zip-helper [seq]
  (let [tuples (map #(rest (string/split (:gps  %) #"[,()]")) seq)
        parsed (map #(hash-map :longitude (Double/parseDouble (first %)) :latitude (Double/parseDouble (second %))) tuples)
        assembled ( )]
     parsed))

(defn zipper [seq]
  (for [entry seq]
    (let [tuple (#(rest (string/split (:gps  %) #"[,()]")) entry)
          parsed (#(hash-map :latitude (Double/parseDouble (first %)) :longitude (Double/parseDouble (second %)))tuple)
          drop-gps (dissoc entry :gps)]
      (conj drop-gps parsed))))


;(def seq-try [{:user "sophie" :gps "(32.222,0.211)"} {:user "martha" :gps "(31.222,0.211)"} {:user "noah" :gps "(33.222,0.211)"}])



;(zipper seq-try)

(defn map-plot [all-entries]
  
  {:schema "https://vega.github.io/schema/vega-lite/v3.json"
   :width  800
   :height 500
   :config
   {:autosize "none" ;default is pad and it doesn't crop a too lage an object
    }
   :layer
   [{:data       {:values (slurp "resources/public/json/vejer-geoshape.json")
                  :format {:type "json" :feature "features"}}
      :projection {:type "albers"}
     :mark       {:type "geoshape" :fill "lightgray" :stroke "transparent"}}

    {:data       {:values all-entries}
     :projection {:type "albers"}
     :mark       "circle"
     :encoding   {:longitude {:field "longitude" :type "quantitative"}
                  :latitude  {:field "latitude" :type "quantitative"}
                  :size      {:field "height" :type "quantitative"}
                  :color     {:field "species"
                              :type  "nominal"
                              :legend {:title nil,
                                       :orient "bottom-right"
                                       :offset 0
                                       }}
                  
                  :tooltip  [{:field "street" :type "nominal"}
                             {:field "number" :type "quantitative"}
                             {:field "facing" :type "nominal"}
                             {:field "type" :type "nominal"}
                             {:field "username" :type "nominal"}]
                  }
     :config     {:view  {:stroke "transparent"}
                  :style {:cell {:stroke "transparent"}}}}]})


(defn perform [{:keys [db] :as request}]
  (let [db (->> db :pool (hash-map :datasource))
        coordinates (->> (logic/get-entries)
                         (h/format)
                         (jdbc/query db))]
    (ring-resp/response #_(zip-helper coordinates)
                        (view/try-viz request (map-plot (zipper coordinates))))))


#_(defn perform [request]
  (ring-resp/response (view/try-viz request map-plot)))
