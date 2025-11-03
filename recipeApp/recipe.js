const recipeUrl = "https://themealdb.com/api/json/v1/1/search.php?s=";
let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector(".searchButton");
let recipeContainer = document.querySelector(".recipe-container");
// let originalText = recipeContainer.textContent;
searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  recipeContainer.innerHTML = `<h2 class="fetchingHeading">we are fetching recipes...</h2>`;
  let recipeInput = searchInput.value.trim();
  fetchMeal(recipeInput);
});
const fetchMeal = async (n) => {
  if (n === "") {
    return (recipeContainer.innerHTML = `<p class="errorMessage">Please, Search for recipes!</p>`);
  }
  searchInput.value = "";
  let promise = await fetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${n}`
  );
  let data = await promise.json();

  if (!data.meals) {
    recipeContainer.innerHTML = `<p class="errorMessage">No meals found. Try another search!</p>`;
    return;
  }
  recipeContainer.innerHTML = ""; // Clear the loading messag

  data.meals.forEach((meal) => {
    let actualRecipe = document.createElement("div");
    actualRecipe.classList.add("actualRecipe");
    actualRecipe.innerHTML = `<img src="${meal.strMealThumb}" alt="meal here" class="mealImage">
    <h2 class="mealName">${meal.strMeal}</h2>
    <p class="mealArea">This dish belongs to <span>${meal.strArea}</span></p>
    <p class="mealCategory">This dish is from <span>${meal.strCategory} category</span></p>
    <button type="button" class="recipeButton">Recipe</button>
    `;
    recipeContainer.appendChild(actualRecipe);
  });

  let allRecipeButtons = document.querySelectorAll(".recipeButton");
  allRecipeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showRecipe(data.meals[index]);
    });
  });
};
const showRecipe = (recipeData) => {
  let recipeDiv = document.querySelector(".recipeDiv");
  if (!recipeDiv) {
    console.error("recipeDiv not found in DOM");
    return;
  }

  recipeDiv.innerHTML = ""; // Clear previous content
  recipeDiv.style.display = "block";

  let originalRecipeDiv = document.createElement("div");
  originalRecipeDiv.classList.add("originalRecipeDiv");
  originalRecipeDiv.innerHTML = `<i class="fa-solid fa-square-xmark"></i>`;
  recipeDiv.appendChild(originalRecipeDiv);
  let mainContentRecipeDiv = document.createElement("div");
  mainContentRecipeDiv.classList.add("mainContentRecipeDiv");
  mainContentRecipeDiv.innerHTML = `
    <p class="mealArea"><span>Name</span> : ${recipeData.strMeal}</p>
    <p class="mealArea"><span>Area</span> : ${recipeData.strArea}</p>
    <p class="mealCategory"><span>Category</span> : ${
      recipeData.strCategory
    }</p>
    <ul> <span>Ingredients : </span>${findIngredient(recipeData)}</ul>
    <p class="mealInstructions"><span>Instructions :</span>  ${
      recipeData.strInstructions
    }</p>
  `;
  recipeDiv.appendChild(mainContentRecipeDiv);
  let closeIcon = originalRecipeDiv.querySelector("i");
  closeIcon.addEventListener("click", () => {
    recipeDiv.style.display = "none";
  });
};
const findIngredient = (recipeData) => {
  let listItems = "";
  for (let i = 1; i <= 20; i++) {
    let ingredient = recipeData[`strIngredient${i}`];
    let measure = recipeData[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      listItems += `<li class="ingredientClass">${measure} : ${ingredient}</li>`;
    }
  }
  return listItems;
};
