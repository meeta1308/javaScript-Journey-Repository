let boxGroup = document.querySelector(".box-group");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let startBtn = document.querySelector(".againStart");
let winner = document.querySelector(".winner");
let result = document.querySelector(".result");
let gameContainer = document.querySelector(".gameContainer");
let turnO = true;
let resultArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "⭕";
      box.style.color = "red";
      turnO = false;
    } else {
      box.textContent = "✖";
      box.style.color = "purple";
      turnO = true;
    }
    box.disabled = true;
    box.classList.add("active");

    setTimeout(() => {
      box.classList.remove("active");
    }, 300);
    checkWinner();
  });
});
const checkWinner = () => {
  let isWinnerFound = false;
  for (const indexes of resultArray) {
    let value0 = boxes[indexes[0]].textContent;
    let value1 = boxes[indexes[1]].textContent;
    let value2 = boxes[indexes[2]].textContent;
    if (value0 !== "" && value0 === value1 && value1 === value2) {
      isWinnerFound = true;
      winner.classList.remove("hide");
      result.textContent = `Winner is ${value0}`;
      gameContainer.style.display = "none";
      boxes.forEach((box) => (box.disabled = true)); // Disable all boxes
      break;
    }
  }
  if (!isWinnerFound) {
    let allFilled = [...boxes].every((box) => box.textContent !== "");
    if (allFilled) {
      winner.classList.remove("hide");
      result.textContent = `Draw ⭕/✖`;
      gameContainer.style.display = "none";
      boxes.forEach((box) => (box.disabled = true));
    }
  }
};
resetBtn.addEventListener("click", () => {
  resetGame();
});
function resetGame() {
  turnO = true;
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
}
startBtn.addEventListener("click", () => {
  startGame();
});
function startGame() {
  gameContainer.style.display = "flex";
  winner.classList.add("hide");
  resetGame();
}

let lastPaintTime=0;
let speed=2;
function main(ctime){
  window.requestAnimationFrame(main);
  if((ctime-lastPaintTime)<1/speed){
    return;
  }
  lastPaintTime=ctime;
}
