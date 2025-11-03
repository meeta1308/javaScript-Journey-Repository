let actualContent = "https://youtu.be/7CaM_j7OO48?si=lPs9ehnF8JdQeMWe";
let Twitter = document.querySelector(".twitter");
Twitter.addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURI(
      actualContent
    )}&text=Listen this song`
  );
});
let telegram = document.querySelector(".telegram");
telegram.addEventListener("click", () => {
  window.open(
    `https://t.me/share/url?url=${encodeURIComponent(
      actualContent
    )}&text=Check this out!, "_blank`
  );
});
let whatsApp = document.querySelector(".whatsapp");
whatsApp.addEventListener("click", () => {
  window.open(
    `https://api.whatsapp.com/send?text=Check this out! ${encodeURIComponent(
      actualContent
    )}`,
    "_blank"
  );
});
let email = document.querySelector(".email");
email.addEventListener("click", () => {
  window.location.href = `mailto:?subject=Check this out&body=Here's something interesting: ${actualContent}`;
});

let chat = document.querySelector(".chat");
chat.addEventListener("click", () => {
  window.open(
    `https://www.snapchat.com/share?link=${encodeURIComponent(actualContent)}`,
    "_blank"
  );
});
let link = document.querySelector(".link");
let copyStatus = document.querySelector(".copy-status");
let copyIcon = document.querySelector(".button_icon");
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(link);
  copyStatus.classList.remove("hidden");
  setTimeout(() => {
    copyStatus.classList.add("hidden");
  }, 2000);
});
