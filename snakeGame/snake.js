//  DOM Elements
let board = document.querySelector(".snakeBoard");
let result = document.querySelector(".result");
let resetBtn = document.querySelector(".reset");
let scoreCard = document.querySelector(".scoreCard");
let arrows = document.querySelectorAll(".arrows");

//  Game State
let score = 0;
let headPositionX = 5;
let headPositionY = 5;
let snakebodyArr = [[5, 5]];
let foodPositionX;
let foodPositionY;
let velocityX = 0;
let velocityY = 1;
let gameOver = false;
let intervalFunction;

//  Sound Effects
let gameOverSound = new Audio("gameOver.mp3");
let eatSound = new Audio("eatSound.mp3");
let clickSound = new Audio("clickSound.mp3");
let startSound = new Audio("startSound.mp3");
let tapSound = new Audio("tap.mp3");
let bumpSound = new Audio("bump.mp3"); // optional
let backgroundSound = new Audio("backgroundSound.mp3");
backgroundSound.loop = true;
backgroundSound.volume = 0.3; // optional

//  Generate Random Food Not on Snake
function foodGenerate() {
  let isOnSnake = true;
  while (isOnSnake) {
    foodPositionY = Math.floor(Math.random() * 18) + 1;
    foodPositionX = Math.floor(Math.random() * 18) + 1;
    isOnSnake = snakebodyArr.some(
      ([x, y]) => x === foodPositionY && y === foodPositionX
    );
  }
}

//  Check Game Over
function gameOverFunction() {
  if (
    headPositionX <= 0 ||
    headPositionX > 18 ||
    headPositionY <= 0 ||
    headPositionY > 18
  ) {
    bumpSound.play(); // optional bump before game over
    gameOver = true;
    return;
  }
  for (let i = 1; i < snakebodyArr.length; i++) {
    if (
      snakebodyArr[i][0] === headPositionY &&
      snakebodyArr[i][1] === headPositionX
    ) {
      bumpSound.play();
      gameOver = true;
      return;
    }
  }
}

//  Main Game Loop
function main() {
  headPositionX += velocityX;
  headPositionY += velocityY;
  gameOverFunction();

  if (gameOver) {
    gameOverSound.play();
    result.classList.remove("hide");
    result.innerHTML = `<div class="over">Game Over</div><span>Score: ${score}</span>`;
    clearInterval(intervalFunction);
    scoreCard.textContent = "";
    return;
  }

  //  Eat Food
  if (headPositionX === foodPositionX && headPositionY === foodPositionY) {
    score++;
    eatSound.play();
    scoreCard.textContent = `Score: ${score}`;
    foodGenerate();
    snakebodyArr.push([foodPositionY, foodPositionX]);
  }
  //  Move Snake Body
  for (let i = snakebodyArr.length - 1; i > 0; i--) {
    snakebodyArr[i] = [...snakebodyArr[i - 1]];
  }
  snakebodyArr[0] = [headPositionY, headPositionX];

  //  Render Snake and Food
  let snakeHead = `<div class="food" style="grid-area:${foodPositionY}/${foodPositionX}"></div>`;
  for (let i = 0; i < snakebodyArr.length; i++) {
    snakeHead += `<div class="snakeHead" id="div${i}" style="grid-area:${snakebodyArr[i][0]}/${snakebodyArr[i][1]}"></div>`;
  }
  board.innerHTML = snakeHead;
  if (snakebodyArr.length === 324) {
    clearInterval(intervalFunction);
    backgroundSound.pause();
    document.querySelector("body").innerHTML = `
    <div class="hurrah">
      Hurrah, you won the game 👑😍<br>
      Final Score: ${score}<br>
    </div>
      <button onclick="location.reload()" class="reset againPlay">Play Again</button>
  `;
  }
}

//  Handle Keyboard Input
document.addEventListener("keydown", (e) => {
  movehead(e);
});
let hasStarted = false;

function movehead(e) {
  if (!hasStarted) {
    backgroundSound.play();
    hasStarted = true;
  }

  if (e.key === "ArrowUp" && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown" && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  }
  clickSound.play();
}

//  Mobile Arrow Controls
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (!hasStarted) {
      backgroundSound.play();
      hasStarted = true;
    }
    tapSound.play();
    movehead({ key: e.currentTarget.dataset.key });
  });
});

// Reset Button
resetBtn.addEventListener("click", () => {
  if (!hasStarted) {
    backgroundSound.play();
    hasStarted = true;
  }

  tapSound.play();
  startSound.play();
  gameOver = false;
  clearInterval(intervalFunction);
  headPositionX = 5;
  headPositionY = 5;
  velocityX = 0;
  velocityY = 1;
  score = 0;
  snakebodyArr = [[5, 5]];
  scoreCard.textContent = `Score: ${score}`;
  result.classList.add("hide");
  foodGenerate();
  intervalFunction = setInterval(main, 200);
});

//  Start Game
foodGenerate();
intervalFunction = setInterval(main, 200);
