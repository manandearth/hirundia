# hirundia

This project is based on [reducecombine/playground](https://github.com/reducecombine/playground)

A working example hosted in -> [heroku](https://fast-anchorage-88647.herokuapp.com/)
## Synopsis
The barn swallow appears to have used man-made structures and bridges since time immemorial. An early reference is in Virgil's Georgics (29 BC):

"Ante garrula quam tignis nidum suspendat hirundo" (Before the twittering swallow hangs its nest from the rafters)

Swallows mate for life. They always return to the same nest. If the nest isn't there they will try torebuild it.

Some people remove swallows nests, consider them pests.

We would like to educate about swallows. This app is a CRUD app for collecting data about swallows nests. We start in Vejer de la Frontera, province of Cádiz, Andalusia. extending the tools as we go along.




## Installation

## Development
### Cider
Jack-in a repl `C-c M-j` 

load the dev namespace `C-c C-k`

in repl:

```
(do
 (clojure.core/require 'clojure.tools.namespace.repl)
  (clojure.core/require 'com.stuartsierra.component.repl)
  ((clojure.core/resolve 'clojure.tools.namespace.repl/set-refresh-dirs) "src" "test")
  (try
    ((clojure.core/resolve 'com.stuartsierra.component.repl/reset))
    (catch java.lang.Throwable v
      (clojure.core/when (clojure.core/instance? java.io.FileNotFoundException v)
        ((clojure.core/resolve 'clojure.tools.namespace.repl/clear)))
      (clojure.core/when ((clojure.core/resolve 'com.stuartsierra.component/ex-component?) v)
        (clojure.core/let [stop (clojure.core/resolve 'com.stuartsierra.component/stop)]
          (clojure.core/some-> v clojure.core/ex-data :system stop)))
      (throw v))))

```
This is the reset and must be used after each change.

It requires to have the following namespaces required:
```
[com.stuartsierra/component.repl "0.2.0"]
[org.clojure/tools.namespace "0.2.11"]
[org.clojure/tools.nrepl "0.2.13" :exclusions [org.clojure/clojure]]
```

## DB

`[juxt.modular/postgres "0.0.1-SNAPSHOT"]` works on PostgreSQL upto verion 9.6 and **not** later..

### Migration

The original creation of the tables and migrations are managed with [joplin](https://github.com/juxt/joplin) 

In order to create the databases:

```
createdb hirundia_dev
```

To first set up (for example a dev postgres environment) run the following in a shell:
`lein reset dev psql-dev`

The db connection url is configured in: `resources/jopin.edn`



