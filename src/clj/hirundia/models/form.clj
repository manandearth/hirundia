(ns hirundia.models.form
  (:require
   [clojure.spec.alpha :as spec]
   [clojure.string :as string]
   [hirundia.translate :as t]))

(spec/def ::language       string?)
(spec/def ::street         string?)
(spec/def ::house_number_name         string?)
(spec/def ::lat            double?)
(spec/def ::lon            double?)
(spec/def ::species        (eval (clojure.set/union (set (map #(t/to-spanish %) [:swallow :swift :martin])) #{"swallow" "swift" "martin"})))
(spec/def ::height         nat-int?)
(spec/def ::facing         (eval (clojure.set/union (set (map #(t/to-spanish %) [:N :NW :W :SW :S :SE :E :NE])) #{"N" "W" "SW" "S" "SE" "E" "NE"})))
(spec/def ::type-of        (eval (clojure.set/union (set (map #(t/to-spanish %) [:balcony :window :cornice :gable :cables :crack])) #{"balcony" "window" "cornice" "gable" "cables" "crack"})))
(spec/def ::date           inst?)
(spec/def ::qty            int?)
(spec/def ::destroyed      (spec/or :bool boolean? :empty empty? :set #{"Si" "No"}))
(spec/def ::destroyed_date (spec/or :inst inst? :empty empty?))
#_(spec/valid? ::date (sql-date (local-date)))

