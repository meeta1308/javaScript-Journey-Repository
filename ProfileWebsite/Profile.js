const showPage = (id) => {
  let pages = document.querySelectorAll(".page");
  pages.forEach((Page) => {
    Page.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
};
