const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-acc-et-WEB-PT/recipes';

const mainEl = document.querySelector('main');
const formEl = document.querySelector('form');
const recipeName = document.querySelector('#recipeName');
const recipeImageUrl = document.querySelector('#imageURL');
const instructions = document.querySelector('#instructions');

async function getRecipes() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
}

function render(recipes) {
  const template = recipes.map(recipe => {
    return (
      `<section>
        <h2>${recipe.name}</h2>
        <img src="${recipe.imageUrl}">
        <p>${recipe.description}</p>
        <button data-id="${recipe.id}">Delete Recipe</button>
      </section>`
    )
  }).join('');
  mainEl.innerHTML = template;
}

async function recipeApp() {
  const recipes = await getRecipes();
  render(recipes);
}

recipeApp();

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: recipeName.value,
        imageUrl: recipeImageUrl.value,
        description: instructions.value,
      })
    });
  
    recipeName.value = '';
    recipeImageUrl.value = '';
    instructions.value = '';
  
    recipeApp();
  } catch (err) {
    console.error(err);
  }
});

mainEl.addEventListener('click', async (event) => {
  if(event.target.matches('button')) {
    const id = event.target.dataset.id;
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    recipeApp();
  }
});