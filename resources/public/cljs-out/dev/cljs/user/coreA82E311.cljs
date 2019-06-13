(ns ^:figwheel-hooks conway.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(println "This text is printed from src/conway/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))


;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(require '[reagent.core :as r])

(def world-size 10)

(def lives
  (atom #{[1 0] [1 1] [1 2]}))

(defn neighbors [[x y]]
  (for [dx [-1 0 1] dy [-1 0 1]
        :when (not (= 0 dx dy))]
    [(+ x dx) (+ y dy)]))

(defn step [lives]
  (set (for [[pos live-neighbors] (frequencies (mapcat neighbors lives))
             :when (or (= 3 live-neighbors) (and (contains? lives pos)
                                                 (= 2 live-neighbors)))]
         pos)))

(defn step! []
  (swap! lives step))

(defn rect-cell [x y]
  [:rect.cell
   {:x (+ 0.05 x) :width 0.9
    :y (+ 0.05 y) :height 0.9
    :fill "white"
    :stroke-width 0.025
    :stroke "black"}])

(defn dead [x y]
  [:rect
   {:width 0.9
    :height 0.9
    :fill "white"
    :x (+ 0.05 x)
    :y (+ 0.05 y)
    :on-click
    (fn click-square [e]
        (swap! lives conj [x y]))}])

(defn life [x y]
  [:rect
   {:width 0.9
    :height 0.9
    :fill "purple"
    :x (+ 0.05 x)
    :y (+ 0.05 y)
    :on-click
    (fn click-square [e]
        (swap! lives disj [x y]))}])

(defn render-board []
  (into
   [:svg.board
    {:view-box (str "0 0 " world-size " " world-size)
     :shape-rendering "auto"
     :style {:max-height "500px"}}]
   (for [x (range world-size)
         y (range world-size)]
     [:g
      [rect-cell x y]
      (if (some #{[x y]} @lives)
        [life x y]
        [dead x y])])))

(defn game []
  [:center
   [:h1 "Conway's Game of Life"]
   [:button
    {:on-click
     (fn step-click [e]
       (swap! lives step))}
    "Step"]
   [:div [render-board]]])

(defn mount [el]
  (reagent/render-component [game] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
