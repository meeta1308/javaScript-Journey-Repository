let attempts = document.querySelector("p span");
let result = document.querySelector(".answer");
let shuffleDiv = document.querySelector(".shuffleDiv");
let inputs = document.querySelectorAll(".word");
let submitBtn = document.querySelector(".submit");
let passBtn = document.querySelector(".pass");
let getWord=document.querySelector(".getWord")
// Game State
let attemptsValue = 5;
let word = "";
let joinedWord = "";
//fetch function
async function fetchWord() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?length=5"
  );
  const data = await response.json();
  word = data[0];
  let shuffle = word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  shuffleDiv.textContent = shuffle;
  attemptsValue = 5;
  attempts.textContent = attemptsValue;
  inputs.forEach((input) => {
    input.value = "";
    input.disabled = false;
  });
  inputs[0].focus();
}
const guessWord = () => {
  joinedWord = Array.from(inputs)
    .map((input) => input.value.toLowerCase())
    .join("");
  return joinedWord;
};
const checkWord = (word, joinedWord) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== joinedWord[i]) {
      return false;
    }
  }
  return true;
};
submitBtn.addEventListener("click", () => {
  let guess = guessWord();
  if (word.length !== guess.length) {
    result.textContent = "⚠️ Please enter valid length";
    return; }
  let guessResult = checkWord(word, guess);
   attemptsValue--;
    attempts.textContent = attemptsValue;
 if(attemptsValue == 0) {
    result.textContent = `Game over! the word was ${word}`;
     fetchWord();
    return;
  }
  if (guessResult) {
  
    setTimeout(() => {  
          result.textContent = "Hurray, you guessed right!"
      fetchWord(); // new word after success
    }, 1000);
  } else {
    result.textContent = "Wrong guess!";
  }

  inputs.forEach((input) => (input.value = ""));
  inputs[0].focus();
});
passBtn.addEventListener("click", () => {
  fetchWord();
});
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length == 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value == "" && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
getWord.addEventListener("click",()=>{
    fetchWord();
})
