window.onload = () => {
  setTimeout(() => {
    document.querySelector(".welcomeCode").style.display = "none";
    document.querySelector(".mainContent").style.display = "block";
    document.querySelector("footer").style.display = "flex";
  }, 2000);
};
let searchButton = document.querySelector(".searchButton");
let searchInput = document.querySelector(".searchText");
let result = document.querySelector(".result");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchWord(searchInput.value);
});

const searchWord = async (word) => {
  try {
    if (word.trim() === "") {
      result.innerHTML = `<h2>Please, Search for any word</h2>`;
      return;
    }

    result.innerHTML = `<h2>Loading...</h2>`;
    searchInput.value = "";

    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!response.ok) throw new Error("Word not found");
    console.log(word);
    const data = await response.json();
    displayResult(data);
  } catch (error) {
    console.error("Fetch error:", error);
    result.innerHTML = `<h2>Sorry, word not found or network error</h2>`;
  }
};
const displayResult = (data) => {
  const entry = data[0];
  const word = entry.word;
  const origin = entry.origin || "Not available";

  let html = `<p class="word"><strong>Word : </strong> ${word}</p>`;

  entry.meanings.forEach((meaning) => {
    const partOfSpeech = meaning.partOfSpeech;
    html += `<p class="speech"><strong>PartOfSpeech : </strong> ${partOfSpeech}</p>`;

    meaning.definitions.forEach((defObj) => {
      const definition = defObj.definition || "Not available";
      const example = defObj.example || "Not available";
      const synonyms = defObj.synonyms.length
        ? defObj.synonyms.map((syn) => `<li>${syn}</li>`).join("")
        : "<li>None</li>";
      const antonyms = defObj.antonyms.length
        ? defObj.antonyms.map((ant) => `<li>${ant}</li>`).join("")
        : "<li>None</li>";

      html += `
        <p class="definition"><strong>Definition : </strong> ${definition}</p>
        <p class="antonyms"><b>Antonyms : <br></b> ${antonyms}</p>
        <p class="synonyms"><b>Synonyms : <br></b> ${synonyms}</p>
        <p class="example"><strong>Example : </strong> ${example}</p>
        <div><a href="https://www.google.com/search?q=define+${word}" target="_blank" class="anchor">Read More</a></div>
      `;
    });
  });

  document.querySelector(".result").innerHTML = html;
};
