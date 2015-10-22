(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.48-5"]
                  [hoplon/boot-hoplon        "0.1.10"]
                  [hoplon/hoplon             "6.0.0-alpha10"]
                  [org.clojure/clojure       "1.7.0"]
                  [org.clojure/clojurescript "1.7.48"]
                  [tailrecursion/boot-jetty  "0.1.0"]
                  [pandeiro/boot-http "0.6.3"]]
  :source-paths #{"src"}
  :asset-paths  #{"assets"}
  :resource-paths #{"assets"})

(require
  '[boot.core          :as    core]
  '[boot.util          :as    util]
  '[clojure.java.io    :as    io]
  '[adzerk.boot-cljs   :refer [cljs]]
  '[hoplon.boot-hoplon :refer [hoplon prerender]]
  '[pandeiro.boot-http :refer [serve]])

(defn- copy [tf dir]
  (let [f (core/tmp-file tf)]
    (util/with-let [to (doto (io/file dir (:path tf)) io/make-parents)]
                   (io/copy f to))))

(defn insert-before-head [html script]
  (.replaceFirst html "</head>" (str "\n" script "\n</head>")))

(deftask inject
  "Injects a file usually with <script> tags into the head of an HTML file in the fileset."
  [f file FILE str "FileSet root-relative path of the HTML file to tinker with."
   s scripts JAVASCRIPT [str] "JavaScript files to inject before the end of the <head>."]
  (assert (and file (seq scripts)) "inject: file and scripts are required arguments")
  (let [tgt (core/tmp-dir!)]
    (core/with-pre-wrap [fs]
                        (core/empty-dir! tgt)
                        (if-let [html-file (first (by-path [file] (core/input-files fs)))]
                          (let [f (copy html-file tgt)
                                html (slurp f)]
                            (util/info "Injecting %s into %s...\n" scripts file)
                            (spit f (reduce insert-before-head
                                            html (->> fs
                                                     core/input-files
                                                     (by-path scripts)
                                                     (map (comp slurp core/tmp-file)))))
                            (-> fs
                                (core/rm [html-file])
                                (core/add-resource tgt)
                                core/commit!))
                          fs))))

(task-options!
  inject {:file "index.html" :scripts ["hubspot.js"]})

(deftask dev
  "Build hoplon-hubspot-form-example for local development."
  []
  (comp
    (watch)
    (hoplon)
    (cljs)
    (inject)
    (serve :port 8000)))

(deftask prod
  "Build hoplon-hubspot-form-example for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :simple)
    (prerender)
    (inject)))
