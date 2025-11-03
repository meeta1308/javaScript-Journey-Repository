let task_Bar = document.querySelector(".taskBar");
let taskBtn = document.querySelector(".btn");
let UnOrded = document.querySelector(".unOrdered");

taskBtn.addEventListener("click", (event) => {
  addTask();
});
const addTask = () => {
  if (task_Bar.value === "") {
    alert("Please, Enter something");
  } else {
    let newList = document.createElement("li");
    newList.textContent = task_Bar.value;
    UnOrded.appendChild(newList);
    let cross = document.createElement("span");
    cross.textContent = "\u274C";
    newList.appendChild(cross);
    task_Bar.value = "";
    saveList();
  }
};
UnOrded.addEventListener("click", (evnt) => {
  toggleClass(evnt);
});

const toggleClass = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    confirm("you are deleting this,I hope you have done it 😊");
    e.target.parentElement.remove();
  }
  saveList();
};
const saveList = () => {
  localStorage.setItem("listResult", UnOrded.innerHTML);
};
const showList = () => {
  UnOrded.innerHTML = localStorage.getItem("listResult");
};
showList();
task_Bar.addEventListener("keypress", (e) => {
  enterPress(e);
});
function enterPress(Key) {
  if (Key.key === "Enter") {
    addTask();
  }
}
