(set-env!
  :project 'hoplon-hubspot-form-example
  :version "0.1.0-SNAPSHOT"
  :dependencies
  '[[tailrecursion/boot-hoplon "0.1.3"]
    [tailrecursion/hoplon "6.0.0-alpha7"]
    [pandeiro/boot-http "0.6.3"]
    [adzerk/boot-cljs "1.7.48-3"]
    [cljsjs/boot-cljsjs "0.5.0" :scope "test"]]
  :source-paths #{"src"}
  :resource-paths #{"assets"})

(require
  '[tailrecursion.boot-hoplon :refer [hoplon prerender]]
  '[pandeiro.boot-http :refer [serve]]
  '[adzerk.boot-cljs :refer [cljs]]
  '[cljsjs.boot-cljsjs :refer [from-cljsjs]])

(task-options!
  speak {:theme "ordinance"}
  from-cljsjs {:profile :development}
  hoplon {:pretty-print true}
  cljs {:optimizations :advanced
        :source-map true
        :compiler-options {:pseudo-names true}})

(deftask dev []
  (comp (watch) (serve) (from-cljsjs) (hoplon) (cljs) (prerender) (speak)))
