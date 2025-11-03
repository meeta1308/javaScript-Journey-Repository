let copyButton = document.querySelector("button");
let loader = document.querySelector(".inputDiv i");
let resultDiv = document.querySelector(".resultDiv");
let checkBoxes = document.querySelectorAll(".checkBoxDiv input");
let currentPassword = ""; //  Store password globally
let length = document.querySelector(".length input");

loader.addEventListener("click", () => {
  generate();
});

//  Attach listener only once
copyButton.addEventListener("click", () => {
  if (resultDiv.textContent === "") {
    return alert("Please, generate a password to copy!");
  }
  navigator.clipboard
    .writeText(currentPassword)
    .then(() => alert("Password copied to clipboard!"))
    .catch((err) => alert("Copy failed: " + err));
});

const generate = async () => {
  let passlength = length.value;
  length.value = "";
  if (passlength < 8) {
    return alert("please, Enter length greater than or equal to 8");
  }
  let baseUrl = `https://api.genratr.com/?length=${passlength}`;
  checkBoxes.forEach((checks) => {
    if (checks.checked) {
      baseUrl += `&${checks.value}`;
    }
  });
  let response = await fetch(baseUrl);
  let data = await response.json();
  currentPassword = data.password; //  Update global password
  resultDiv.textContent = currentPassword;
};
