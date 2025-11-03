setInterval(() => {
  const time = new Date();
  let currSeconds = time.getSeconds();
  let currMinutes = time.getMinutes();
  let currHours = time.getHours();

  let secondHandDeg = currSeconds * 6;
  let minuteHandDeg = currMinutes * 6 + currSeconds * 0.1;
  let hourHandDeg = (currHours % 12) * 30 + currMinutes * 0.5;
  let secondHand = document.querySelector(".second");
  let hourHand = document.querySelector(".hour");
  let minuteHand = document.querySelector(".minute");
  secondHand.style.transform = `rotateZ(${secondHandDeg}deg)`;
  minuteHand.style.transform = `rotateZ(${minuteHandDeg}deg)`;
  hourHand.style.transform = `rotateZ(${hourHandDeg}deg)`;
}, 1000);
