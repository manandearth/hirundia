(ns hirundia.views
  (:require
   [clj-postgresql.core :as pg]
   [hiccup.page :as page]
   [hiccup.table :as table]
   [hiccup.form :as form]
   [java-time :refer :all :exclude [contains? iterate max zero? format min max range]]
   [clojure.java.io :as io]
   [buddy.auth :refer [authenticated?]]
   [hirundia.pages :as pages]
   [hirundia.translate :as t]))

(defn gen-page-head
  [title]
  [:head
   [:title (str "Nests: " title)]
   [:link  {:rel "stylesheet" :href "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" :integrity "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" :crossorigin "anonymous"}]
   [:link {:href "https://fonts.googleapis.com/css?family=Roboto" :rel "stylesheet"}]
   [:meta {:charset "UTF-8"}]
   (page/include-css "/css/styles.css")])

(defn  bootstrap-scripts
  []
  [:script {:src "https://code.jquery.com/jquery-3.4.1.slim.min.js" :integrity "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" :crossorigin "anonymous"}]
  [:script {:src "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" :integrity "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" :crossorigin "anonymous"}]
  [:script {:src "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" :integrity "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" :crossorigin "anonymous"}])

(defn header-links
  [{:keys [session] :as request}]
  (if  (:identity session)
    [:div {:class "container"}
     [:div {:class "navbar navbar-light fixed-top" :style "background-color: #e3f2fd;"}
      [:a {:class "nav-link" :href "/"} [:button  {:class "btn btn-info"} (t/to-spanish :home)]]
      [:a {:href "/about"} [:button {:class "btn btn-info"} (t/to-spanish :about)]]
      [:a {:href "/nests"} [:button  {:class "btn btn-info"}  (t/to-spanish :nests)]]
      [:a {:href "/dashboard"} [:button {:class "btn btn-info"} (t/to-spanish :dashboard)]]
      [:a {:href "/nests-insert"} [:button {:class "btn btn-primary"} (t/to-spanish :nests-insert)]
       [:a (t/to-spanish :logged_as)  [:span {:class "badge badge-secondary"} (get-in session [:identity :username])]]]
      [:a {:href "/logout"} [:button {:class "btn btn-primary"} (t/to-spanish :logout)]]]]
    [:div {:class "container"}
     [:div {:class "navbar navbar-light fixed-top" :style "background-color: #e3f2fd;"}

      [:a {:href "/"} [:button  {:class "btn btn-info"} (t/to-spanish :home)]]
      [:a {:href "/about"} [:button  {:class "btn btn-info"} (t/to-spanish :about)]]
      [:a {:href "/nests"} [:button  {:class "btn btn-info"} (t/to-spanish :nests)]]
      [:a {:href "/dashboard"} [:button  {:class "btn btn-info"} (t/to-spanish :dashboard)]]
      [:a {:href "/login"} [:button  {:class "btn btn-secondary"}  (t/to-spanish :login)]]
      [:a {:href "/register"} [:button {:class "btn btn-primary"} (t/to-spanish :register)]]]]))

(defn home [request]
  (page/html5
   (gen-page-head "Home")
   (header-links request)
   (if (authenticated? (:session request))
     [:div {:class "container"}
      [:div
       [:h1 "Bienvenido/a al proyecto 'Convivencia'."]
       [:p "Accede el base de datos o añada entradas por la barra de navegación"]]]
     [:div {:class "container"} [:h1 "Bienvenido/a a proyecto 'Convivencia'."]
      (pages/intro)])
   (bootstrap-scripts)))

(defn about [request]
  (page/html5
   (gen-page-head "About")
   (header-links request)
   (if (authenticated? (:session request))
     (pages/intro)
     [:div {:class "container"}
      [:div
       [:h1 "El proyecto"]
       [:p "El proyecto Hirundia es una herramienta que explora las relacion entre especies de aves urbanos golondrinas, vencejos y aviones comunes con los humanos para la conservación.
"]]])))

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
   [:div {:class "container"}
    [:h1 "Añada nido al base de datos"]
    [:div {:class "card"}
     [:form {:action "/nests-insert" :method "POST"}
      ;;(util/anti-forgery-field) ; prevents cross-site scripting attacks

      ;;TODO language is hard coded for now

      [:p [:label [:input {:type "hidden" :name "language" :value "spanish"}]]]

      [:div {:class "form-group row"}
       [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :street)]
        [:input {:class "form-control mx-sm-1" :type "text" :name "street"}]]
       [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :house_number_name)]
        [:input {:class "form-control mx-sm-1" :type "text" :name "house_number_name"}]]]

      [:div {:class "form-group row"}
       [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :lat)]
        [:input {:class "form-control mx-sm-1" :type "int" :name "lat"}]]
       [:div {:class "col-auto"} [:label {:class "my-1 mr-2"} (t/to-spanish :lon)]
        [:input {:class "form-control mx-sm-1" :type "int" :name "lon"}]]]

      [:div {:class "form-group row"}
       [:div {:class "col-auto"} [:label (t/to-spanish :species)   (form/drop-down "species" (map #(t/to-spanish %) [:swallow :swift :martin :pallid_swift :red_rumped_swallow]))]]
       [:div {:class "col-auto"} [:label (t/to-spanish :type)      (form/drop-down "type-of" [(t/to-spanish :window) (t/to-spanish :cornice) (t/to-spanish :crack) (t/to-spanish :cables) (t/to-spanish :gable) (t/to-spanish :balcony)] (t/to-spanish :window))]]]

      [:div {:class "form-group row"}
       [:div {:class "col-auto"} [:label (t/to-spanish :height)    (form/drop-down "height" (map inc (range 20)) 5)]]
       [:div {:class "col-auto"} [:label (t/to-spanish :facing)   (form/drop-down "facing" [(t/to-spanish :N) (t/to-spanish :NE) (t/to-spanish :E) (t/to-spanish :SE) (t/to-spanish :S) (t/to-spanish :SW) (t/to-spanish :W) (t/to-spanish :NW)] (t/to-spanish :N))]]]

      [:div [:label (t/to-spanish :date)      [:input {:type "date" :name "date"}]]]
      [:div {:class "card"} [:div {:class "card-body" :style "background-color: #f5faff"}
                             [:div {:class "card-subtitle mb-2 text-muted"} "Cada nido crea una entrada en la base de datos. "]
                             [:div {:class "card-subtitle mb-2 text-muted"} "En el caso de múltiples nidos con las mismas especificaciones se actualiza este valor:"]
                             [:div (:class "col-auto") [:label (t/to-spanish :qty)       [:input {:class "form-control ms-mx-1" :type "int" :name "qty" :value 1}]]]]]
      [:div {:class "card"} [:div {:class "card-body" :style "background-color: #e3f2fd;"}
                             [:div {:class "card-subtitle mb-2 text-muted"} "Si el nido ya no está allí, rellene lo siguiente e incluya el día registrado:"]
                             [:div [:label (t/to-spanish :destroyed) (form/drop-down "destroyed" [(t/to-spanish :false) (t/to-spanish :true)] (t/to-spanish :false))]]
                             [:div [:label (t/to-spanish :destroyed_date) [:input {:type "date" :name "destroyed_date"}]]]]]
      [:div {:class "col-auto"} [:input {:type "submit" :class "btn btn-primary mb-2" :value (t/to-spanish :submit)}]]]]]))

(defn register [{:keys [flash] :as request}]
  (page/html5
   (gen-page-head "Register")
   (header-links request)
   [:div {:class "container"} (when (seq flash) [:div {:class "alert alert-success"} flash])
    [:div
     [:h1 (t/to-spanish :register)]
     [:form {:action "/register" :method "POST"}
      [:div
       [:p [:label (t/to-spanish :username) [:input {:type "text" :name "username"}]]]
       [:p [:label (t/to-spanish :password) [:input {:type "password" :name "password"}]]]
       [:p [:label "" [:input {:type "submit" :value (t/to-spanish :register)}]]]]]]]))


;FIXME flash here suppose to be just the username but this view is redirected by also `login` POST perform endpoint which sends a flash message for wrong password..


(defn login [{:keys [flash] :as request}]
  (page/html5
   (gen-page-head "Login")
   (header-links request)
   [:div {:class "container"} (when (seq flash) [:div {:class "alert alert-warning alert-dismissible fade show"} flash])
    [:div
     [:h1 "Entrada"]
     [:form {:action "/login" :method "POST"}
      [:div
       [:p [:label (t/to-spanish :username)
            [:input {:type "text" :name "username"}]]]
       [:p [:label (t/to-spanish :password) [:input {:type "password" :name "password"}]]]
       [:p [:label "" [:input {:type "submit" :value (t/to-spanish :submit)}]]]]]]]))

(defn dashboard [request]
  (page/html5
   (gen-page-head "Dashboard")
   (header-links request)
   [:div {:class "container" :id "app"}]
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

