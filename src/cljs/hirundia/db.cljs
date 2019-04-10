(ns hirundia.db ^:figwheel-always
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
   [ajax.core :refer [GET POST]]
   [cljs.core.async :refer [<! >! chan put! take! put!]]
   [reagent.core :as r]
   ))

#_(def df (atom {}))

#_(defn dataframe [url]
  (go
    (let [response (<! (http/get url))]
      (reset! df (:body response))))   
  )
#_(let [df (atom nil)
      data (GET "http://localhost:8080/transit")]
  (reset! df  data)
  @df)

#_(defn data []
  (do (dataframe "http://localhost:8080/transit")
      @df))




#_(def df (atom nil))
#_(defn get-data []
  (let [data (GET "http://localhost:8080/transit"
                  :response-format :json
                  :keywords? true 
                  :handler
                               (fn [response] (reset! df response)))]
    data ;<-- called before component mount
))

#_(get-data)

#_(def result (atom nil))
#_(defn get-tables [result-atom next]
  (GET "/transit"
            {:headers {"Accept" "application/transit+json"}
             :handler (fn [response]
                        (reset! result-atom (vec response))
                        (next result-atom))})) ; This is the key line





;@df2







#_(defn handler [response]
  (reset! df response))

(def df2  (atom nil))
#_(defn component []
  (GET "/transit"
       :handler (fn [response]
                  (reset! df2 (:body response))))
 @df2 )

(def my-atom (atom {}))
(def channel (chan))

#_(go (>! channel (GET "/transit"
                     :format :json
                     :handler (fn [response] (swap! my-atom assoc :df response))))
    )


;@my-atom



(def default-db 
  {:name "nests"
   :data (let [data (go (>! channel (GET "/transit"
                                         :format :json
                                         :handler (fn [response] (swap! my-atom assoc :df response))))
                        )]
           (doall
            data
            @my-atom))

   :selected-attr :gps})

(:data default-db) 

#_(GET "http://localhost:8080/transit"
                                :response-format :json
                                :keywords? true
                                :handler handler)


#_(GET "/transit"
     :format :json
     :keywords? true
     :handler (fn [response]
                (go (<! (swap! df2 assoc :df (:body response))))))

;@df2

#_(defn data-call [channel route]
  (go (>! channel route )
      <! channel ))








;;;;;;;;;;;;;;
;; (def bufferless-chan (chan))

;; (put! bufferless-chan
;;       "futu-maki"
;;       #(println (str "order put? " %)))

;; (put! bufferless-chan
;;       "spider-web"
;;       #(println (str "order put? " %)))

;; (take! bufferless-chan
;;        #(println (str "order taken: " % )))


;; (defn take-logger [order]
;;   (prn (str "order taken: " order)))

;; (defn put-logger [boolean]
;;   (prn (str "order put? " boolean)))

;; (defn put!-order [channel order]
;;   (put! channel order put-logger))

;; (defn take!-order [channel]
;;   (take! channel take-logger))


;; (put!-order bufferless-chan "soup")
;; (take!-order bufferless-chan)
