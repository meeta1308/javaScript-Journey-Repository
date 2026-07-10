// ================= PHOTO SLIDER =================

const slides = document.querySelectorAll(".slide");
let current = 0;

function changeSlide() {
  slides[current].classList.remove("active");

  current++;

  if (current >= slides.length) {
    current = 0;
  }

  slides[current].classList.add("active");
}

setInterval(changeSlide, 1000); // 1 second

// ================= OPEN SURPRISE =================

function openSurprise() {
  document.getElementById("cardPage").style.display = "none";

  document.getElementById("surprisePage").style.display = "flex";

  let video = document.getElementById("birthdayVideo");

  video.currentTime = 0;
  video.play();

  startConfetti();
}

// ================= BACK BUTTON =================

function goBack() {
  let video = document.getElementById("birthdayVideo");

  video.pause();
  video.currentTime = 0;

  document.getElementById("surprisePage").style.display = "none";

  document.getElementById("cardPage").style.display = "block";
}

// ================= CONFETTI =================

function startConfetti() {
  for (let i = 0; i < 120; i++) {
    let confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";

    confetti.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}

}

`;

document.head.appendChild(style);
