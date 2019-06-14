# conway

[Conway's Game of Life](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwin5u75uObiAhXlhFQKHaygCYUQFjABegQIBBAB&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FConway%2527s_Game_of_Life&usg=AOvVaw3Ren4zMW9qfyNBCmJvYMlL) using the [Reagent](https://github.com/reagent-project/reagent) wrapper for React.

## Features

* Infinite world
* Animated stepper
* Selectable starting sequence
* Sample configurations
* Custom grid size

Play it live [Here](https://porkostomus.github.io/conway/)

## Development

To get an interactive development environment run:

    lein fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min
