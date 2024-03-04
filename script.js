// script.js
document.addEventListener("DOMContentLoaded", function () {
    // ... (your existing code)

    // Function to scroll to a specific section
    function scrollToSection() {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Get dropdown items
    var faqDropdownItems = document.querySelectorAll('#faqDropdown a');
    var howtoDropdownItems = document.querySelectorAll('#howtoDropdownContent a');

    // Add click event listeners to each dropdown item
    faqDropdownItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            var sectionId = event.target.textContent.toLowerCase() + 'Questions';
            scrollToSection(sectionId);
        });
    });

    howtoDropdownItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            var sectionId = event.target.textContent.toLowerCase() + 'HowTo';
            scrollToSection(sectionId);
        });
    });
});


// Improved Ingredient Freshness
const ingredientInput = document.getElementById("ingredientInput");
const ingredientFreshnessButton = document.getElementById("ingredientFreshness");
const ingredientResultContainer = document.getElementById("ingredientResult");

ingredientFreshnessButton.addEventListener("click", function () {
    const userIngredients = ingredientInput.value.trim();

    if (userIngredients !== "") {
        // You can implement the logic to suggest recipes based on the user's ingredients here
        // For now, let's just display a message
        ingredientResultContainer.innerHTML = `<p>Suggesting recipes based on: ${userIngredients}</p>`;
    } else {
        ingredientResultContainer.innerHTML = "<p>Please enter ingredients.</p>";
    }
});







function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recipes = getHomemadeSaucesAndCondiments(); // Function to retrieve recipes (dummy data)

    const recipeList = document.querySelector('.recipe-list');

    // Clear previous search results
    recipeList.innerHTML = '';

    // Filter recipes based on search input
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );

    if (filteredRecipes.length === 0) {
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = 'No recipes found.';
        recipeList.appendChild(noResultMessage);
    } else {
        // Display filtered recipes
        filteredRecipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe');
            recipeItem.innerHTML = `
                <h2>${recipe.name}</h2>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            `;
            recipeList.appendChild(recipeItem);
        });
    }
}

// Example function to retrieve recipes (dummy data)
function getHomemadeSaucesAndCondiments() {
    // Dummy data for demonstration purposes
    return [
        {
            name: 'Tomato Sauce',
            ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Olive Oil', 'Herbs'],
            instructions: 'Saute onions and garlic, add tomatoes and herbs, simmer until thickened.'
        },
        {
            name: 'Guacamole',
            ingredients: ['Avocados', 'Lime Juice', 'Tomatoes', 'Onions', 'Cilantro'],
            instructions: 'Mash avocados, mix with lime juice, tomatoes, onions, and cilantro.'
        },
        // Add more recipes as needed
    ];
}

