(ns hirundia.views
  (:require
   [clj-postgresql.core :as pg]
   [hiccup.page :as page]
   [hiccup.table :as table]
   [java-time :refer :all :exclude [contains? iterate max zero? format min max range]]
   [hirundia.sandbox :as records]
   ))

(defn gen-page-head
  [title]
  [:head
   [:title (str "Nests: " title)]
   [:link {:href "https://fonts.googleapis.com/css?family=Roboto" :rel "stylesheet"}]
   [:meta {:charset "UTF-8"}]

   (page/include-css "/css/styles.css")])

(def header-links
  [:div#header-links
   "[ "
   [:a {:href "/"} "Home"]
   " | "
   [:a {:href "/about"} "About"]
   " |"
   [:a {:href "/nests"} "View all nests"]
   " | "
   [:a {:href "/nests-insert"} "Add a nest"]
   " | "
   [:a {:href "/login"} "Login"]
   " | "
   [:a {:href "/register"} "Register"]
   " ]"])

(defn home []
  (page/html5
   (gen-page-head "Home")
   header-links
    [:div
     [:h1 "Welcome to Hirundia Project."]
     [:p "Access the database or add data with the links above"]
     ]))

(defn about []
    (page/html5
     (gen-page-head "About")
     header-links
     [:div
      [:h1 "About this project"]
      [:p "The Hirundia project is a tool exploring the relations of Swallows, Swifts, and House Martins with humans for conservation."]]))

;;TODO convert to pedestal db
(defn list-of-entries []
  (page/html5
   (gen-page-head "Complete List of Entries")
    header-links
    [:div
      [:h1 "Complete List Of Entries"]
     [:div (table/to-table1d
            records/select-all-query
            [:id "ID" :street "Street" :number "No." :gps "GPS" :species "Species" :facing "Facing" :height "Height" :type "Type" :date "Date"  :destroyed "Destroyed?" :destroyed_date "Date destroyed"])]]))

#_(count records/select-all-query)

(defn insert-to-db []
  (page/html5
   (gen-page-head "add a nest to the database")
    header-links
    [:div
     [:h1 "Add a nest to the database"]
     [:form {:action "/add-address" :method "POST"}
     ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
      [:div
       [:p [:label.justify "Street: " [:input {:type "text" :name "street"}]]]
       [:p [:label.justify "Number: " [:input {:type "int" :name "number"}]]]
       [:p [:label.justify "Latitude: " [:input {:type "int" :name "lat"}]]]
       [:p [:label.justify "Longitude: " [:input {:type "int" :name "lon"}]]]
       [:p [:label.justify "Species: " [:input {:type "text" :name "species"}]]]
       [:p [:label.justify "Height: " [:input {:type "text" :name "height"}]]]
       [:p [:label.justify "Facing: " [:input {:type "text" :name "facing"}]]]
       [:p [:label.justify "Type: " [:input {:type "text" :name "type-of"}]]]
       [:p [:label.justify "Date: " [:input {:type "text" :name "date"}]]]
       [:p "If the nest is no longer there fill in the following and include the day recorded:"]
       [:p [:label.justify "Destroyed: " [:input {:type "text" :name "destroyed"}]]]
       [:p [:label.justify "Destroyed date: " [:input {:type "text" :name "destroyed_date"}]]]
       [:p [:label.justify "λ ->" [:input {:type "submit" :value "Submit"}]]]]]]))



(defn insert-entry []
  (page/html5
   (gen-page-head "add a nest to the database")
    header-links
    [:div
     [:h1 "Add a nest to the database"]
     [:form {:action "/nests-insert" :method "POST"}
     ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks
      [:div
       [:p [:label.justify "Street: " [:input {:type "text" :name "street"}]]]
       [:p [:label.justify "Number: " [:input {:type "int" :name "number"}]]]
       [:p [:label.justify "Latitude: " [:input {:type "int" :name "lat"}]]]
       [:p [:label.justify "Longitude: " [:input {:type "int" :name "lon"}]]]
       [:p [:label.justify "Species: " [:input {:type "text" :name "species"}]]]
       [:p [:label.justify "Height: " [:input {:type "text" :name "height"}]]]
       [:p [:label.justify "Facing: " [:input {:type "text" :name "facing"}]]]
       [:p [:label.justify "Type: " [:input {:type "text" :name "type-of"}]]]
       [:p [:label.justify "Date: " [:input {:type "text" :name "date"}]]]
       [:p "If the nest is no longer there fill in the following and include the day recorded:"]
       [:p [:label.justify "Destroyed: " [:input {:type "text" :name "destroyed"}]]]
       [:p [:label.justify "Destroyed date: " [:input {:type "text" :name "destroyed_date"}]]]
       [:p [:label.justify "λ ->" [:input {:type "submit" :value "Submit"}]]]]]]))

(defn insert-to-db-results
  [context]
  (if-let [params (get context :params)]
    (let [street (get params "street" nil)
          num (get params "number" nil)
          lat (get params "lat" nil)
          lon (get params "lon" nil)
          species (get params "species" nil)
          height (get params "height" nil)
          facing (get params "facing" nil)
          type-of (get params "type-of" nil)
          day (get params "date" nil)
          destroyed (get params "destroyed" nil)
          destroyed-date (get params "destroyed_date" nil)]
      (do (page/html5
           (gen-page-head "Added an entry")
            header-links
            [:p (str street " " num " ,GPS: (" lat ", " lon  " ) a " species " nest" " at " height " meters, facing " facing ", constructed: " type-of " recorded on " day)])
          (records/insert-nest!
           {:street (if-not (= 0 (count street)) street nil)
            :number (if-not (= 0 (count num)) (Integer/parseInt num) nil)
            :gps (if-not (or (= 0 (count lon)) (= 0 (count lat))) (pg/point (list (Float/parseFloat lat) (Float/parseFloat lon))) nil)
            :species (if-not (= 0 (count species)) species nil)
            :height (if-not (= 0 (count height)) (Integer/parseInt height) nil)
            :facing (if-not (= 0 (count facing)) facing nil)
            :type-of (if-not (= 0 (count type-of)) type-of nil)
            :date (if-not (= 0 (count day)) (sql-date (clj-time.format/parse (clj-time.format/formatters :date) day)) nil) ;;require a yyyy-mm-dd format (TODO create a spec)
            :destroyed (if-not (= 0 (count destroyed)) (read-string destroyed) nil)
            :destroyed_date (if-not (= 0 (count destroyed-date)) (sql-date (clj-time.format/parse (clj-time.format/formatters :date)  destroyed-date)) nil)})))
    context))

;;HERE passing the db parameters to insert-nest2! which wraps a JDBC INSERT . using (:db context) 
(defn insert-to-db-results2
  [context]
  (if-let [params (get context :params)]
    (let [street (get params "street" nil)
          num (get params "number" nil)
          lat (get params "lat" nil)
          lon (get params "lon" nil)
          species (get params "species" nil)
          height (get params "height" nil)
          facing (get params "facing" nil)
          type-of (get params "type-of" nil)
          day (get params "date" nil)
          destroyed (get params "destroyed" nil)
          destroyed-date (get params "destroyed_date" nil)]
      (do (page/html5
           (gen-page-head "Added an entry")
            header-links
            [:p (str street " " num " ,GPS: (" lat ", " lon  " ) a " species " nest" " at " height " meters, facing " facing ", constructed: " type-of " recorded on " day)])
          (records/insert-nest2!
           {:street (if-not (= 0 (count street)) street nil)
            :number (if-not (= 0 (count num)) (Integer/parseInt num) nil)
            :gps (if-not (or (= 0 (count lon)) (= 0 (count lat))) (pg/point (list (Float/parseFloat lat) (Float/parseFloat lon))) nil)
            :species (if-not (= 0 (count species)) species nil)
            :height (if-not (= 0 (count height)) (Integer/parseInt height) nil)
            :facing (if-not (= 0 (count facing)) facing nil)
            :type-of (if-not (= 0 (count type-of)) type-of nil)
            :date (if-not (= 0 (count day)) (sql-date (clj-time.format/parse (clj-time.format/formatters :date) day)) nil) ;;require a yyyy-mm-dd format (TODO create a spec)
            :destroyed (if-not (= 0 (count destroyed)) (read-string destroyed) nil)
            :destroyed_date (if-not (= 0 (count destroyed-date)) (sql-date (clj-time.format/parse (clj-time.format/formatters :date)  destroyed-date)) nil)}
           (:db context)
           )))
    context))



(defn register [{:keys [flash] :as request}]
  (page/html5
   (gen-page-head "Register")
   header-links
   [:div (when (seq flash) [:h2.flash flash])
    [:div
     [:h1 "Register"]
     [:form {:action "/register" :method "POST"}
      [:div
       [:p [:label.justify "Username: " [:input {:type "text" :name "username"}]]]
       [:p [:label.justify "Password: " [:input {:type "text" :name "password"}]]]
       [:p [:label.justify "" [:input {:type "submit" :value "Register"}]]]]]]]))

(defn login [{:keys [flash] :as request}]
  (page/html5
   (gen-page-head "Login")
   header-links
   [:div (when (seq flash) [:h2.flash (str flash ", you are now registered. Please login")])
    [:div
     [:h1 "Login"]
     [:form {:action "/login" :method "POST"}
      [:div
       [:p [:label.justify "Username: " [:input {:type "text" :name "username" :value flash}]]]
       [:p [:label.justify "Password: " [:input {:type "text" :name "password"}]]]
       [:p [:label.justify "" [:input {:type "submit" :value "Login"}]]]]]]]))


;; (insert-to-db-results {:params {"street" "Kookoo"}})
;;(list-of-entries)


;; (table/to-table1d (list {:age 3 :name "Jo"} {:age 2 :name "Bob"}) [:age "Age" :name "Name"] )
