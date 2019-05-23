(ns hirundia.db ^:figwheel-always
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
     [ajax.core :refer [GET POST]]
     [cljs.core.async :refer [<! >! chan put! take! put!]]
     [reagent.core :as r]))

(def df (r/atom nil))

(def my-atom (atom {}))

(def default-db
  {:name "nests"
   :data @df
   :selected-attr :gps})
