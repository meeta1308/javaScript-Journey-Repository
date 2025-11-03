let microsoft = document.querySelector(".microsoft");
let amazon = document.querySelector(".amazon");
let slack = document.querySelector(".slack");
let facebook = document.querySelector(".facebook");
let slackOriginalText = slack.textContent;
let microsoftOriginalText = microsoft.textContent;
let amazonOriginalText = amazon.textContent;
let facebookOriginalText = facebook.textContent;
microsoft.addEventListener("click", () => {
  microsoft.textContent = `we are redirecting you to microsoft `;
  setTimeout(() => {
    window.open("https://www.microsoft.com", "_blank");

    microsoft.textContent = microsoftOriginalText;
  }, 2000);
});

slack.addEventListener("click", () => {
  slack.textContent = `we are redirecting you to slack `;
  setTimeout(() => {
    window.open("https://www.slack.com", "_blank");

    slack.textContent = slackOriginalText;
  }, 2000);
});
amazon.addEventListener("click", () => {
  amazon.textContent = `we are redirecting you to amazon `;
  setTimeout(() => {
    window.open("https://www.amazon.in", "_blank");

    amazon.textContent = amazonOriginalText;
  }, 2000);
});
facebook.addEventListener("click", () => {
  facebook.textContent = `we are redirecting you to facebook `;
  setTimeout(() => {
    window.open("https://www.facebook.com", "_blank");

    facebook.textContent = facebookOriginalText;
  }, 2000);
});
