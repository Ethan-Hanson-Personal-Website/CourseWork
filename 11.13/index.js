const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonList = document.querySelector('ul');

async function getPokemon() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.error(err);
    }
}

function render(pokemon) {
    const template = pokemon.map(pokemon => {
        return(
            `<li>
            <h2>${pokemon.name}</h2>
            <button data-name=${pokemon.name}>Get info</button>
            </li> `
        )
}).join('');
pokemonList.innerHTML = template;
}


pokemonListEl.addEventListener('click', async e => {
    if (e.target.matches('button')){
        const name = e.target.dataset.name;
        const pokemon = await getSinglePokemon(name);
    }
})

function toggleModal(){
    const modal = document.querySelector('#modal')
    modal.classList.toggle('hidden');
}

pokemonNameEl = document.querySelector('#pokemon-details h2');
pokemonImgSrcEl = document.querySelector('#pokemon-details img');
pokemonTypesEl = document.querySelector('#types');
function renderSinglePokemon(pokemon){
    pokemonNameEl.textContent = pokemon.name;
    pokemonImgSrcEl.textContent = pokemon.sprites.font_default;
    pokemonTypesEl = pokemon.types.map(type => type.type.name).join(',');
    pokemonTypesEl.innerHTML=types;
}

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', toggleModal);

async function pokemonApp(){
    const pokemon = await getPokemon;
    render(pokemon);
}

async function getSinglePokemon(){
    try{
        const response = await fetch(`{BASE_URL}/${name}`);
        const data = await response.json();
        console.log(data);

    }catch(err){
        console.log(err);
    }
}