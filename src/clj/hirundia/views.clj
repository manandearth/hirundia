(ns hirundia.views
  (:require
   [clj-postgresql.core :as pg]
   [hiccup.page :as page]
   [hiccup.table :as table]
   [hiccup.form :as form]
   [java-time :refer :all :exclude [contains? iterate max zero? format min max range]]
   [clojure.java.io :as io]
   [buddy.auth :refer [authenticated?]]
   [hirundia.pages :as pages]))

(defn gen-page-head
  [title]
  [:head
   [:title (str "Nests: " title)]
   [:link {:href "https://fonts.googleapis.com/css?family=Roboto" :rel "stylesheet"}]
   [:meta {:charset "UTF-8"}]

   (page/include-css "/css/styles.css")])

(defn header-links
  [{:keys [session] :as request}]
  (if  (:identity session)
    [:div#header-links
     "[ "
     [:a {:href "/"} "Home"]
     " | "
     [:a {:href "/about"} "About"]
     " |"
     [:a {:href "/nests"} "View all nests"]
     " | "
     [:a {:href "/dashboard"} "Dashboard"]
     " | "
     [:a {:href "/nests-insert"} "Add a nest"]
     " | Logged in as " (get-in session [:identity :username])
     " | "
     [:a {:href "/logout"} "Logout"]
     " ]"]
    [:div#header-links
     "[ "
     [:a {:href "/"} "Home"]
     " | "
     [:a {:href "/about"} "About"]
     " |"
     [:a {:href "/nests"} "View all nests"]
     " | "
     [:a {:href "/dashboard"} "Dashboard"]
     " | "
     [:a {:href "/login"} "Login"]
     " | "
     [:a {:href "/register"} "Register"]
     " ]"]))

(defn home [request]
  (page/html5
   (gen-page-head "Home")
   (header-links request)
   (if (authenticated? (:session request))
     [:div
      [:h1 "Welcome to Hirundia Project."]
      [:p "Access the database or add data with the links above"]]
     [:div
      [:h1 "Welcome to Hirundia Project."]
      (pages/intro)])))

(defn about [request]
  (page/html5
   (gen-page-head "About")
   (header-links request)
   (if (authenticated? (:session request))
     (pages/intro)
     [:div
      [:h1 "About this project"]
      [:p "The Hirundia project is a tool exploring the relations of Swallows, Swifts, and House Martins with humans for conservation."]])))

(defn greet [{:keys [session] :as request}]
  (page/html5
   (gen-page-head "Greet")
   (header-links request)
   [:div
    [:h1 "A greeting"]
    (if (authenticated? (:session request))
      (let [username (:identity session)]
        [:p (str "Hi, " username)])
      "Hi, Anonymous...")]))

(defn insert-entry [request]
  (page/html5
   (gen-page-head "add a nest to the database")
   (header-links request)
   [:div
    [:h1 "Add a nest to the database"]
    [:form {:action "/nests-insert" :method "POST"}
     ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
     [:div
      [:p [:label.justify "Street: "    [:input {:type "text" :name "street"}]]]
      [:p [:label.justify "Number: "    [:input {:type "int" :name "number"}]]]
      [:p [:label.justify "Latitude: "  [:input {:type "int" :name "lat"}]]]
      [:p [:label.justify "Longitude: " [:input {:type "int" :name "lon"}]]]
      [:p [:label.justify "Species: "   (form/drop-down "species" ["swallow" "swift" "martin"] "martin")]]
      [:p [:label.justify "Height: "    (form/drop-down "height" (map inc (range 20)) 5)]]
      [:p [:label.justify "Facing: "    (form/drop-down "facing" ["N" "NW" "W" "SW" "S" "SE" "E" "NE"] "N")]]
      [:p [:label.justify "Type: "      (form/drop-down "type-of" ["balcony" "window" "cornice" "gable" "cables" "crack"] "window")]]
      [:p [:label.justify "Date: "      [:input {:type "date" :name "date"}]]]
      [:p "If the nest is no longer there fill in the following and include the day recorded:"]
      [:p [:label.justify "Destroyed: " (form/drop-down "destroyed" [true false] false)]]
      [:p [:label.justify "Destroyed Date: " [:input {:type "date" :name "destroyed_date"}]]]
      [:p [:label.justify "λ ->"        [:input {:type "submit" :value "Submit"}]]]]]]))

(defn register [{:keys [flash] :as request}]
  (page/html5
   (gen-page-head "Register")
   (header-links request)
   [:div (when (seq flash) [:h2.flash flash])
    [:div
     [:h1 "Register"]
     [:form {:action "/register" :method "POST"}
      [:div
       [:p [:label.justify "Username: " [:input {:type "text" :name "username"}]]]
       [:p [:label.justify "Password: " [:input {:type "password" :name "password"}]]]
       [:p [:label.justify "" [:input {:type "submit" :value "Register"}]]]]]]]))


;FIXME flash here suppose to be just the username but this view is redirected by also `login` POST perform endpoint which sends a flash message for wrong password..


(defn login [{:keys [flash] :as request}]
  (page/html5
   (gen-page-head "Login")
   (header-links request)
   [:div (when (seq flash) [:h2.flash flash])
    [:div
     [:h1 "Login"]
     [:form {:action "/login" :method "POST"}
      [:div
       [:p [:label.justify "Username: "
            [:input {:type "text" :name "username"}]]]
       [:p [:label.justify "Password: " [:input {:type "password" :name "password"}]]]
       [:p [:label.justify "" [:input {:type "submit" :value "Login"}]]]]]]]))

(defn dashboard [request]
  (page/html5
   (gen-page-head "Dashboard")
   (header-links request)
   [:div {:id "app"}]
   [:link {:rel "stylesheet" :href "https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
           :integrity "sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
           :crossorigin ""}]
   ;; [:script {:src "https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
   ;;           :integrity "sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
   ;;           :crossorigin ""}]
   ;; [:script {:src "https://unpkg.com/vega@3.2.1/build/vega.js"}]
   ;; [:script {:src "https://unpkg.com/regenerator-runtime@0.11.1/runtime.js"}]
   ;; [:script {:src "lvega/bundle.js"}]
   [:script {:src "js/compiled/app.js" :type "text/javascript"}]))

(defn osm-page [request]
  (page/html5
   [:head
    [:meta {:charset "UTF-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    [:link {:rel "stylesheet" :href "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" :type "text/css"}]
    [:script {:src "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js" :charset "utf-8"}]
    [:body
     [:div {:id "mapid"}]
     [:div {:id "main-app-area"}]
     [:script {:src "js/compiled/osm.js" :type "text/javascript"}]]]))

