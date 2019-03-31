(ns hirundia.service-test
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [io.pedestal.test :refer [response-for]]
            [io.pedestal.http.route.definition.table :refer [table-routes]]
            [com.stuartsierra.component :as component]
            [clojure.test :refer :all]
            [user]
            [hirundia.server]
            [hirundia.service]))

(def url-for (route/url-for-routes
              (route/expand-routes hirundia.service/routes)))

(deftest greeting-test
  (let [system com.stuartsierra.component.repl/system 
        service (user/service-fn system)
        {:keys [status body headers]} (response-for service
                                            :get
                                            (url-for :home))] 
    (is (= 200 status))                                        
    (is (= "<!DOCTYPE html>\n<html><head><title>Nests: Home</title><link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\"><meta charset=\"UTF-8\"><link href=\"/css/styles.css\" rel=\"stylesheet\" type=\"text/css\"></head><div id=\"header-links\">[ <a href=\"/\">Home</a> | <a href=\"/about\">About</a> |<a href=\"/nests\">View all nests</a> | <a href=\"/nests-insert\">Add a nest</a> ]</div><div><h1>Welcome to Hirundia Project.</h1><p>Access the database or add data with the links above</p></div></html>" body)
(is (= {"X-Frame-Options"                   "DENY",
          "Access-Control-Allow-Origin"       "",
          "X-XSS-Protection"                  "1; mode=block",
          "X-Download-Options"                "noopen",
          "Strict-Transport-Security"         "max-age=31536000; includeSubdomains",
          "X-Permitted-Cross-Domain-Policies" "none",
          "Access-Control-Allow-Credentials"  "true",
          "Access-Control-Expose-Headers"
          "Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, X-Xss-Protection, X-Download-Options, X-Permitted-Cross-Domain-Policies, Content-Security-Policy, Content-Type",
          "X-Content-Type-Options"            "nosniff",
          "Content-Security-Policy"           "object-src none",
          "Content-Type"                      "text/html;charset=UTF-8"} headers)))))

#_(def service
  (::bootstrap/service-fn (bootstrap/create-servlet service/service)))

#_(deftest home-page-test
  (is (= (-> service (response-for :get "/") :body)
         "Hello World!"))
  (is (= (-> service (response-for :get "/") :headers)
         {"Content-Type" "text/html;charset=UTF-8"
          "Strict-Transport-Security" "max-age=31536000; includeSubdomains"
          "X-Frame-Options" "DENY"
          "X-Content-Type-Options" "nosniff"
          "X-XSS-Protection" "1; mode=block"
          "X-Download-Options" "noopen"
          "X-Permitted-Cross-Domain-Policies" "none"
          "Content-Security-Policy" "object-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;"})))

#_(deftest about-page-test
  (is (-> service (response-for :get "/about") :body (.contains "Clojure 1.8")))
  (is (= (-> service (response-for :get "/about") :headers)
         {"Content-Type" "text/html;charset=UTF-8"
          "Strict-Transport-Security" "max-age=31536000; includeSubdomains"
          "X-Frame-Options" "DENY"
          "X-Content-Type-Options" "nosniff"
          "X-XSS-Protection" "1; mode=block"
          "X-Download-Options" "noopen"
          "X-Permitted-Cross-Domain-Policies" "none"
          "Content-Security-Policy" "object-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;"})))

