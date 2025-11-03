const speech = new SpeechSynthesisUtterance();
let textArea = document.querySelector(".text-area");
let butn = document.querySelector(".btn");
let selection = document.querySelector(".selector");
let voices = [];
butn.addEventListener("click", (objects) => {
  changeVoice();
});
const changeVoice = () => {
  if (textArea.value == "") {
    textArea.value = "Please, Enter some text here";
    changeVoice();
  } else {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
  }
};
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[10];

  voices.forEach(
    (voice, i) => (selection.options[i] = new Option(voice.name, i))
  );
};
selection.addEventListener("change", () => {
  speech.voice = voices[selection.value];
});
