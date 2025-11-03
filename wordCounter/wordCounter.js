let words = document.querySelector(".words");
let characters = document.querySelector(".characters");
let withoutspaces = document.querySelector(".withoutspaces");
let withspaces = document.querySelector(".withspaces");
let text = document.querySelector("#text");
text.addEventListener("input", (event) => {
  let textToCount = event.target.value;

  let totalWords = textToCount
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  let totalCharacters = textToCount.length;
  let withoutSpacesCharacters = textToCount.replace(/\s/g, "").length;

  words.textContent = totalWords;
  characters.textContent = totalCharacters;
  withoutspaces.textContent = withoutSpacesCharacters;
  withspaces.textContent = totalCharacters; // same as totalCharacters
});
