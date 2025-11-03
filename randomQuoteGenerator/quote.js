let button = document.querySelector("button");
let quoteDiv = document.querySelector(".quoteDiv");
let author = document.querySelector(".author");

button.addEventListener("click", () => {
  generateQuote();
});

const generateQuote = async () => {
  let response = await fetch("https://dummyjson.com/quotes");
  let data = await response.json();
  let randomIndex = Math.floor(Math.random() * data.quotes.length);
  quoteDiv.textContent = `"${data.quotes[randomIndex].quote}"`;
  author.textContent = `~ ${data.quotes[randomIndex].author}`;
};
