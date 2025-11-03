let allStars = document.querySelectorAll(".starsCard i");
const ClickedIndex = localStorage.getItem("clickedIndex");
if (ClickedIndex) {
  allStars.forEach((star, i) => {
    if (i <= ClickedIndex) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
allStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    localStorage.setItem("clickedIndex", index);
    allStars.forEach((oneStar, i) => {
      if (i <= index) {
        oneStar.classList.add("active");
      } else {
        oneStar.classList.remove("active");
      }
    });
  });
});
