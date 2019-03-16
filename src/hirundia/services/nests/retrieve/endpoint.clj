(ns hirundia.services.nests.retrieve.endpoint
  (:require
   [cheshire.generate]
   [clojure.java.jdbc :as jdbc]
   [clojure.spec.alpha :as spec]
   [honeysql.core :as h]
   [hirundia.views :as views]
   [hirundia.services.nests.retrieve.logic :as logic]
   [hiccup.page :as page]
   )

  (:import
   [org.postgresql.jdbc4 Jdbc4Array]))

(cheshire.generate/add-encoder Jdbc4Array (fn [c json-generator]
                                            (-> c .getArray (cheshire.generate/encode-seq json-generator))))

(spec/def ::id nat-int?)

(spec/def ::api (spec/keys :req-un [::id]))

(defn perform [{{:keys [id]} :path-params :keys [db] :as request}]
  (let [db     (->> db :pool (hash-map :datasource))
        record (->> (logic/to-query id)
                    (h/format)
                    (jdbc/query db)
                    (first))]
    (if record
      (page/html5
       (views/gen-page-head (str "Record No: " id))
       views/header-links
       [:div
        [:h1 (str "Nest record No: " id)]
        [:p (str record)]])
      {:status 404})))

