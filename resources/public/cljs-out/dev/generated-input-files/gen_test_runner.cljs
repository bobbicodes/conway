(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [conway.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote conway.core-test))