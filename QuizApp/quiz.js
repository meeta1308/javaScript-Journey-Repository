document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".result-container").style.display = "none";
});
const questions = [
  {
    question: "What is the computer?",
    a: "electronic device",
    b: "a radio",
    c: "a language",
    d: "ATM machine",
    corrrect: "a",
  },
  {
    question: "Which of the following is a markup language?",
    a: "html",
    b: "php",
    c: "javascript",
    d: "css",
    corrrect: "a",
  },
  {
    question: "What is the vs Code?",
    a: "a language",
    b: "an IDE",
    c: "browser",
    d: "a machine",
    corrrect: "b",
  },
  {
    question: "What is the base for binary number?",
    a: "8",
    b: "4",
    c: "2",
    d: "10",
    corrrect: "c",
  },
  {
    question: "What is the json stands for?",
    a: "cascading style sheet",
    b: "markup language",
    c: "javascript object notation",
    d: "framework",
    corrrect: "c",
  },
];
let buttons = document.querySelectorAll(".btn");
let questionText = document.querySelector("#myQuestion");
let fullBody = document.querySelector(".full-body");
let previousButton = document.querySelector(".previousButton");
let right = 0;
let wrong = 0;
let index = 0;
let total = questions.length;
let userAnswer = new Array(total).fill(null);
const questionLoad = () => {
  questionText.textContent = `${index + 1}) ${questions[index].question}`;
  buttons[0].innerText = `a) ${questions[index].a}`;
  buttons[1].innerText = `b) ${questions[index].b}`;
  buttons[2].innerText = `c) ${questions[index].c}`;
  buttons[3].innerText = `d) ${questions[index].d}`;
};
questionLoad();
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    clickFunction(event);
  });
});
const clickFunction = (event) => {
  let clickedValue = event.target.value;
  let correctValue = questions[index].corrrect;
  if (userAnswer[index] === correctValue) {
    alert(`You already have selected right answer 😍😅`);
    return;
  }
  userAnswer[index] = clickedValue;
  buttons.forEach((btn) => {
    if (btn.value === correctValue) {
      btn.style.backgroundColor = "rgba(0, 200, 0, 0.73)";
    } else {
      btn.style.backgroundColor = "rgba(224, 29, 29, 0.73)";
    }
  });
  if (clickedValue === correctValue) {
    right++;
  } else {
    wrong++;
  }
};
let nextButton = document.querySelector(".nextButton");
nextButton.addEventListener("click", () => {
  nextQuestion();
});
const nextQuestion = () => {
  reset();
  index++;
  if (index !== questions.length) {
    questionLoad();
  } else {
    fullBody.style.display = "none";
    document.querySelector(".result-container").style.display = "block";
    let resultHTML = "";
    if (right === total) {
      resultHTML = `<h1>Thanks for visiting <i class="fa-solid fa-face-laugh-beam"></i></h1>`;
    } else if (right === 0) {
      resultHTML = `<h1>You have failed <i class="fa-solid fa-heart-crack"></i></h1>`;
    } else {
      resultHTML = `<h1>Try again for better performance <i class="fa-solid fa-face-smile"></i></h1>`;
    }
    document.querySelector(".result-show").innerHTML = `
        ${resultHTML}
        <h2>You got ${right}/${total} marks</h2>
    `;
  }
};
let againButton = document.querySelector(".startQuiz");
againButton.addEventListener("click", () => {
  againStart();
});
const againStart = () => {
  index = 0;
  right = 0;
  wrong = 0;
  reset();
  againButton.style.display = "none";
  fullBody.style.display = "flex";
  document.querySelector(".result-container").style.display = "none";

  questionLoad();
  buttons.forEach((btn) => {
    btn.style.display = "inline-block";
    btn.style.backgroundColor = "";
  });
};
const reset = () => {
  if (index < questions.length) {
    // Reset all button backgrounds
    buttons.forEach((btn) => {
      btn.style.backgroundColor = ""; // ✅ removes yellow/red
    });
  }
};
previousButton.addEventListener("click", () => {
  previous();
});
const previous = () => {
  if (index > 0) {
    index--;
    reset();
    questionLoad();
  }
};
