const recipes = [
    { title: "Chocolate Chip Cookies", description: "Classic homemade Chocolate chip cookies."},
    { title: "Victoria Sandwich", description: "Classic homemade victoria sandwich."},
    { title: "Cottage Pie", description: "Classic homemade cottage pie."},
    // Add more recipes here
];

const recipeList = document.querySelector(".recipe-list");
const recipeDetails = document.querySelector(".recipe-details");
const recipeTitle = document.querySelector("#recipe-title");
const recipeDescription = document.querySelector("#recipe-description");
const closeDetailsButton = document.querySelector("#close-details");

recipeDescription.forEach(recipe => {
    const recipeElement = document .createElement("div");
    recipeElement.classList.add("recipe");
    recipeElement.innerHTML = `
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
        <button class="view-recipe">View Recipe</button>
    `;
    recipeList.appendChild(recipeElement);

    const viewRecipeButton = recipeElement.querySelector(".view-recipe");
    viewRecipeButton.addEventListener("click", () => {
        recipeTitle.textContent = recipe.title;
        recipeDescription.textContent = recipe.description;
        recipeList.style.display = "none";
        recipeDetails.style.display = "block";
    });
});

closeDetailsButton.addEventListener("click", () => {
    recipeDetails.style.display = "none";
    recipeList.style.display = "flex";
});