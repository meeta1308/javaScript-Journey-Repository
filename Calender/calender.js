let date = new Date();
let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currDate = date.getDate();
let currDay = dayArray[date.getDay()];
let currMonth = monthArray[date.getMonth()];
let currYear = date.getFullYear();
document.querySelector(".date").textContent = currDate;
document.querySelector(".day").textContent = currDay;
document.querySelector(".month").textContent = currMonth;
document.querySelector(".year").textContent = currYear;
setInterval(() => {
  let time = new Date();
  let currHour = time.getHours();
  let currMinute = time.getMinutes();
  let currSecond = time.getSeconds();
  document.querySelector(".hour").textContent = `${currHour}:`;
  if (currMinute < 10) {
    document.querySelector(".minute").textContent = `0${currMinute}:`;
  } else {
    document.querySelector(".minute").textContent = `${currMinute}:`;
  }
  if (currSecond < 10) {
    document.querySelector(".second").textContent = `0${currSecond}`;
  } else {
    document.querySelector(".second").textContent = currSecond;
  }
}, 1000);
