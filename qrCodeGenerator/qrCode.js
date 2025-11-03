let button = document.querySelector(".btn");
let imageDiv = document.querySelector(".imgDiv");
let image = document.querySelector("#img");
let input_text = document.querySelector("#inputText");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
function generator() {
  if (input_text.value === "") {
    alert("Please, Enter any text");
  } else {
    image.src = `${url}${input_text.value}`;
    imageDiv.classList.add("image_Div");
    input_text.value = "";
  }
}
input_text.addEventListener("keypress", (e) => {
  generate(e);
});

function generate(element) {
  if (element.key === "Enter") {
    generator();
  }
}
