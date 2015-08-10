#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.1"

(set-env!
  :project      'homepage
  :version      "0.1.0-SNAPSHOT"
  :dependencies
  '[[tailrecursion/boot.task    "2.2.4"]
    [tailrecursion/hoplon       "5.10.24"]
    [exicon/hoplon5-semantic-ui "1.10.2-SNAPSHOT"]
    #_[cljsjs/hubspot-forms "0.1.0-SNAPSHOT"]]
  :out-path     "resources/public"
  :src-paths    #{"src/hl" "src/cljs"})

;; Static resources (css, images, etc.):
(add-sync! (get-env :out-path) #{"assets"})

(require '[tailrecursion.hoplon.boot :refer :all]
         '[tailrecursion.castra.task :as c])

(def server (c/castra-dev-server [] :port 8000))

(deftask dev
  "Build homepage for development."
  []
  (comp (watch) (hoplon {:prerender false}) server))
