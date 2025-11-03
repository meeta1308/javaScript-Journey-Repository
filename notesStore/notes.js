let storeButton = document.querySelector(".btn");
let notesGroup = document.querySelector(".notes-group");

storeButton.addEventListener("click", () => {
  createTextArea("");
});

const createTextArea = (text = "") => {
  let newRow = document.createElement("div");
  newRow.classList.add("list-row");

  let newArea = document.createElement("textarea");
  newArea.name = "notes";
  newArea.value = text; // ✅ restore text if provided

  let trash = document.createElement("span");
  trash.classList.add("trash");
  trash.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  trash.addEventListener("click", () => {
    newRow.remove();
    saveList();
  });

  newArea.addEventListener("input", () => {
    saveList(); // ✅ auto-save on typing
  });

  newRow.appendChild(newArea);
  newRow.appendChild(trash);
  notesGroup.appendChild(newRow);
};

const saveList = () => {
  let allTextareas = document.querySelectorAll(".list-row textarea");
  let notes = [];

  allTextareas.forEach((area) => {
    notes.push(area.value);
  });

  localStorage.setItem("notesResult", JSON.stringify(notes));
};

const showList = () => {
  let saved = localStorage.getItem("notesResult");
  if (saved) {
    let notes = JSON.parse(saved);
    notesGroup.innerHTML = ""; // clear old content

    notes.forEach((text) => {
      createTextArea(text); // ✅ recreate each note with its text
    });
  }
};

showList();
