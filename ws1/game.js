const SNAKE_SPEED = 5;

const gameBoard = document.getElementById('game-board');
let gameOver = false;
let isDecay = false;

const main = () => {
  update();
  draw();
  // TODO 4.3, 4.4: Add Game Over Alert, and clear interval!
  if (gameOver) {
      alert("Game Over!");
      clearInterval(gameLoop);
  }
};

// TODO 4.4: Define the interval ID
// HINT: ONLY EDIT THE LINE BELOW!
let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
  updateSnake();
  updateFood();
  // TODO 4.2: Update Game State
  gameOver = isGameOver();
};

const draw = () => {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

// TODO 4.1: Create a function that checks if the game is over

const isGameOver = () => {
    // return snakeOutOfBounds() || snakeIntersectSelf() || snakeIsDecayed();
    return snakeOutOfBounds() || snakeIntersectSelf() || isDecay;
}