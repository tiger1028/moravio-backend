# Moravio Backend Assessment

## Task

For a game we are implementing we need a computational engine. We will implement the frontend part, so you don’t need to worry about it much.

The game requires no user input and it implements Conway’s game of life https://en.wikipedia.org/wiki/Conway’s_Game_of_Life. Esentially the rules are simple. Given a state of the Universe, the game engine is able to compute new state of the Universe. Every tick of the game the Universe is a product of only one previous state.

Please came up with input/output of the library and design input/output types accordingly.

## Conway’s game

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
