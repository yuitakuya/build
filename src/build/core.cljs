(ns build.core
  (:require [pylon.classes])
  (:use-macros [pylon.macros :only [defclass]]))

(defclass Hello
  (defn constructor [name]
    (set! @.name name))
  (defn hello []
    (console/log (str "Hello " @.name "!"))))

(.hello (Hello. "Kitty"))

