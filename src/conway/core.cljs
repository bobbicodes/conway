(ns ^:figwheel-hooks conway.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(defn multiply [a b] (* a b))

(defonce app-state (atom {:status "not started"}))

(defn get-app-element []
  (gdom/getElement "app"))

(def world-size 10)

(defn wrap-coordinate [n]
  (mod n world-size))

(defn wrap-square [[x y]]
  [(wrap-coordinate x) (wrap-coordinate y)])

(defn wrap-squares [lives]
  (map wrap-square lives))

(def lives
  (atom #{}))

(defn neighbors [[x y]]
  (for [dx [-1 0 1] dy [-1 0 1]
        :when (not (= 0 dx dy))]
    [(+ x dx) (+ y dy)]))

(defn step [lives]
  (set (for [[pos live-neighbors] (frequencies (mapcat neighbors lives))
             :when (or (= 3 live-neighbors)
                       (and (contains? lives pos)
                            (= 2 live-neighbors)))]
         pos)))

(defn step! []
  (reset! lives (step @lives)))

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
      (if (= (:status @app-state) "not started")
        (swap! lives conj [x y])
        (js/alert "Hands off! You are not God.")))}])

(defn life [x y]
  [:rect
   {:width 0.9
    :height 0.9
    :fill "purple"
    :x (+ 0.05 x)
    :y (+ 0.05 y)
    :on-click
    (fn click-square [e]
      (if (= (:status @app-state) "not started")
        (swap! lives disj [x y])
        (js/alert "Ouch!")))}])

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
                (if (some #{[x y]} (wrap-squares @lives))
                [life x y]
                [dead x y]))]))

(defn game []
  [:center
   [:h1 "Conway's Game of Life"]
   [:div [:button
    {:on-click
     (fn step-click [e]
       (swap! lives step)
       (swap! app-state assoc-in [:status] "started"))}
    "Step"]
    [:button
     {:on-click
      (fn step-click [e]
        (reset! lives #{})
        (swap! app-state assoc-in [:status] "not started"))}
     "Reset"]]
   [:div [:button
    {:on-click
     (fn step-click [e]
       (reset! lives
         #{[3 4] [4 4] [5 4] [5 3] [4 2]}))}
    "Glider"]
    [:button
     {:on-click
      (fn step-click [e]
        (reset! lives
          #{[4 3] [5 3] [7 2] [5 5] [8 3] [7 4] [5 4]
            [6 5] [4 4] [7 3] [6 2] [6 4]}))}
     "Spaceship"]
   [:button
    {:on-click
     (fn step-click [e]
       (reset! lives
         #{[5 7] [4 3] [3 4] [5 3] [3 2] [4 6] [5 5]
           [5 6] [5 2] [3 1] [5 1] [4 5] [3 3] [5 4]
           [3 5] [4 8] [4 1] [3 6] [5 8] [3 8] [4 4] [3 7]}))}
    "Penta-decathlon"]]
   [:div [render-board]]
   [:p (str "Current residents:" @lives)]])

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
  ;; optionally touch your a

;; define your app data so that it doesn't get over-written on reloadpp-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
