document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const musicBody = document.querySelector(".full-body");
    const welcome = document.querySelector(".welcome");

    if (musicBody) musicBody.style.display = "flex";
    if (welcome) welcome.style.display = "none";
  }, 4000);
});
const availSongs = {
  "Big-Men.mp3": "R Nait",
  "Teri-Meri-Prem-Kahani.mp3": "Salman Khan",
  "Bandook.mp3": "Pranjal Dahiya",
  "Gajab-Mere-Khatu-Wale.mp3": "xyz",
  "Muchh.mp3": "Diljit Dosanj",
  "Bulleya.mp3": "Ranbir Kapoor",
  "Sang-Mar-Gayi.mp3": "Kulwinder",
  "Yari-Chandigarh-Waliye.mp3": "Ranjit Bawa",
};
let song = document.querySelector("#Audio");
let PlayCtrl = document.querySelector("#playCtrl");
let InputR = document.querySelector("#Range");
let middle = document.querySelector(".footermiddle");
let Select = document.querySelector(".selection");
let Singer = document.querySelector(".singer");
let songname = document.querySelector(".songName");
let leftFooter = document.querySelector("footerleft");
let rightFooter = document.querySelector("footerright");
const defaultIndex = 0; // first song
Select.selectedIndex = defaultIndex;

song.onloadedmetadata = function () {
  InputR.max = song.duration;
  InputR.value = song.currentTime;
};
window.onload = () => {
  // const defaultIndex = 0; // first song
  // Select.selectedIndex = defaultIndex;
  const defaultFile = Select.options[defaultIndex].value;
  song.src = defaultFile;
  songname.textContent = defaultFile.replace(".mp3", "");
  Singer.textContent = availSongs[defaultFile];
};

for (let key in availSongs) {
  let options = document.createElement("option");
  options.value = key;
  options.innerText = `${key}-${availSongs[key]}`;
  Select.appendChild(options);
}
const playPause = () => {
  if (PlayCtrl.classList.contains("fa-circle-pause")) {
    song.pause();
    PlayCtrl.classList.add("fa-play");
    PlayCtrl.classList.remove("fa-circle-pause");
  } else {
    song.play();
    PlayCtrl.classList.remove("fa-play");
    PlayCtrl.classList.add("fa-circle-pause");
  }
};
Select.addEventListener("change", (event) => {
  changeSongByMenu(event);
});
//dynamically add song in select menu
const changeSongByMenu = (element) => {
  const selectedFile = element.target.value;
  song.src = selectedFile;
  song.play(); // optional: auto-play when song changes
  songname.textContent = selectedFile.replace(".mp3", "");
  Singer.textContent = availSongs[selectedFile];
  PlayCtrl.classList.remove("fa-play");
  PlayCtrl.classList.add("fa-circle-pause");
};
//move slider for real time update with song
song.ontimeupdate = function () {
  InputR.value = song.currentTime;
};

// Seek song when slider is moved
InputR.addEventListener("input", () => {
  song.currentTime = InputR.value;
});
const updateSongLeftFooter = () => {
  let newIndex = Select.selectedIndex - 1; // use let instead of const
  if (newIndex < 0) {
    newIndex = Select.options.length - 1;
  }
  Select.selectedIndex = newIndex;
  let newUrl = Select.options[newIndex].value;
  song.src = newUrl;
  song.play();
  PlayCtrl.classList.remove("fa-play");
  PlayCtrl.classList.add("fa-circle-pause");
  songname.textContent = Select.options[newIndex].value.replace(".mp3", "");
  Singer.textContent = availSongs[Select.options[newIndex].value];
};
const updateSongRightFooter = () => {
  let newIndex = Select.selectedIndex + 1; // use let instead of const
  if (newIndex === Select.options.length) {
    newIndex = 0;
  }
  Select.selectedIndex = newIndex;
  let newUrl = Select.options[newIndex].value;
  song.src = newUrl;
  song.play();
  PlayCtrl.classList.remove("fa-play");
  PlayCtrl.classList.add("fa-circle-pause");
  songname.textContent = Select.options[newIndex].value.replace(".mp3", "");
  Singer.textContent = availSongs[Select.options[newIndex].value];
};
function back() {
  //for refresh song
  if (PlayCtrl.classList.contains("fa-circle-pause")) {
    song.pause();
    PlayCtrl.classList.add("fa-play");
    PlayCtrl.classList.remove("fa-circle-pause");
    song.currentTime = 0;
    InputR.value = 0;
  }
}
