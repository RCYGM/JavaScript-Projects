
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonImg = document.getElementById('sprite');



// basic info
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');

// stats
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const API = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

let pokemonData = [];

const displayPokemon = () => {
    // basic info
    pokemonName.textContent = pokemonData.name;
    pokemonId.textContent = pokemonData.id;
    weight.textContent = pokemonData.weight;
    height.textContent = pokemonData.height;
    types.textContent = pokemonData.type;

    console.log()

    // stats
    hp.textContent = pokemonData.hp;
    attack.textContent = pokemonData.attack;
    defense.textContent = pokemonData.defense;
    specialAttack.textContent = pokemonData.specialAttack;
    specialDefense.textContent = pokemonData.specialDefense;
    speed.textContent = pokemonData.speed;

    pokemonImg.classList.toggle('none')
    pokemonImg.src = pokemonData.src;
    pokemonImg.alt = pokemonData.name;


    console.log(pokemonData)
}

const orderPokemon = (url) => {
    fetch(url)
        .then(res => res.json()).then(data => {
            pokemonData = {
                name: data.name,
                id: data.id,
                weight: data.weight,
                height: data.height,
                type: data.types.map(t => t.type.name.toUpperCase()).join(", "),
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
                src: data.sprites.front_default,
            };
            console.log(pokemonData.type)
            console.log(data.types)
            displayPokemon();
        })
        .catch(err => {
            alert('Error: ' + err.message)
        });
}

const searchPokemon = (inputId) => {
    console.log(inputId);

    fetch(API)
        .then(res => res.json()).then(data => {

            if (/^[\d]+$/.test(inputId)) {
                pokemonData = data.results.find(pokemon => pokemon.id === inputId);
                if(!pokemonData){
                    alert("Pokémon not found");
                }
                console.log(pokemonData);
                orderPokemon(pokemonData.url);

            } else if (/^[a-zA-Z]+$/.test(inputId)) {
                pokemonData = data.results.find(pokemon => pokemon.name === inputId)
                if(!pokemonData){
                    alert("Pokémon not found");
                }
                console.log(pokemonData);
                orderPokemon(pokemonData.url);
            }
        })
        .catch(err => {
            alert("Error: " + err.message);
        })
};

const checkInput = () => {

    if (/^[\w]+$/.test(searchInput.value)) {

        if (/^[\d]+$/.test(searchInput.value)) {
            searchPokemon(Number(searchInput.value))

        } else if (/[a-zA-Z]/.test(searchInput.value)) {
            const loweCase = searchInput.value.toLowerCase()
            searchPokemon(loweCase)

        } else {
            alert("Enter a valid name or number");
        };

    } else {
        alert("Enter a valid name or number");
    };
};

searchButton.addEventListener('click', checkInput);

