(ns hirundia.osm
 )

(def URL-OSM "http://{s}.tile.osm.org/{z}/{x}/{y}.png")

(defn create-map []
  (let [m (-> js/L
              (.map "mapid2")
              (.setView (array -33.8675 151.2070) 9))       ;; Sidney
        tile1 (-> js/L (.tileLayer URL-OSM
                                   #js{:maxZoom     16
                                       :attribution "OOGIS RL, OpenStreetMap &copy;"}))
        base (clj->js {"OpenStreetMap" tile1})
        ctrl (-> js/L (.control.layers base nil))]
    (.addTo tile1 m)
    (.addTo ctrl m)))


