(defproject hirundia "0.0.1-SNAPSHOT"
  :description ""
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [;;TODO when clojure and clojurescript were not in the top of the dependencies, some other dependency puled in an old version of transit. Thread is in->  https://www.reddit.com/r/Clojure/comments/a56tu3/cljsbuild_refuses_to_compile_only_when_using/
                 [org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 #_[amazonica "0.3.125"]
                 #_[background-processing "0.1.0-SNAPSHOT"]
                 [better-cond "1.0.1"]
                 [ch.qos.logback/logback-classic "1.1.8" :exclusions [org.slf4j/slf4j-api]]
                 [com.grzm/component.pedestal "0.1.7"]
                 [com.mchange/c3p0 "0.9.5.2"]
                 [com.stuartsierra/component "0.4.0"]
                 [expound "0.6.0"]
                 [honeysql "0.9.4"]
                 [io.pedestal/pedestal.jetty "0.5.3"]
                 [io.pedestal/pedestal.service "0.5.3"]
                 [juxt.modular/postgres "0.0.1-SNAPSHOT"]
                 [org.clojure/core.async "0.4.490"]
                 [org.clojure/java.jdbc "0.7.6"]
                 [org.clojure/tools.logging "0.4.0"]
                 [nrepl "0.6.0"]
                 [org.slf4j/jcl-over-slf4j "1.7.22"]
                 [org.slf4j/jul-to-slf4j "1.7.22"]
                 [org.slf4j/log4j-over-slf4j "1.7.22"]
                 [prismatic/schema "1.1.9"]
                 [spec-coerce "1.0.0-alpha6"]
                 [clj-postgresql "0.7.0"]
                 [clojure.java-time "0.3.2"]
                 [hiccup "1.0.5"]
                 [hiccup-table "0.2.0"]
                 [buddy/buddy-auth "2.1.0"]
                 [metasoarous/oz "1.6.0-alpha2"]
                 [reagent "0.8.1"]
                 [re-frame "0.10.6"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [com.cognitect/transit-clj "0.8.313"]
                 [cljs-ajax "0.8.0"]]
  :repl-options {:port 41234}
  :min-lein-version "2.0.0"
  :resource-paths ["config" "resources"]
  :plugins [[lein-cljsbuild "1.1.7"]
            [cider/cider-nrepl "0.21.1"]]
  ;:figwheel {:css-dirs ["resources/public/css"]}
  :profiles {:dev {:dependencies [[io.pedestal/pedestal.service-tools "0.5.3"]
                                  [com.stuartsierra/component.repl "0.2.0"]
                                  [org.clojure/tools.namespace "0.3.0-alpha4"]
                                  [org.clojure/tools.nrepl "0.2.13" :exclusions [org.clojure/clojure]]
                                  [figwheel-sidecar "0.5.18"]
                                  [cider/piggieback "0.4.0"]]
                   
                   :source-paths ["dev" "src/clj" "src/cljs"]
                   :repl-options {:init-ns user}}
             :uberjar {:aot [hirundia.server]}}
  :cljsbuild
  {:builds [{:id "dev"
             ;;TODO check if this path actually makes a difference.
             :ring-handler "hirundia.service/js-app-page"
             ;; The path to the top-level ClojureScript source directory:
             :source-paths ["src/cljs"]
             ;; The standard ClojureScript compiler options:
             ;; (See the ClojureScript compiler documentation for details.)
             :compiler {:main hirundia.core
                        :output-to "resources/public/js/compiled/app.js"
                        :output-dir "resources/public/js/compiled/out"
                        :asset-path "js/compiled/out"
                        ;;:cache-analysis false
                        :optimizations :none
                        :pretty-print true}}
            {:id "min"
             :source-paths ["src/cljs"]
             :compiler     {:main            hirundia.core
                            :output-to       "resources/public/js/compiled/app.js"
                            :optimizations   :advanced
                            :closure-defines {goog.DEBUG false}
                            :pretty-print    false}}]}
  
  :main ^{:skip-aot true} hirundia.server)
