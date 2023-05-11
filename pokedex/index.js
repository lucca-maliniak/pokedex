const search = document.querySelector('[pokemon-search]')
const input = document.querySelector('[pokemon-id]')
const pokemon_nome = document.querySelector('[pokemon-nome]')
const pokemon_id = document.querySelector('[id-pokemon]')
const pokemon_img = document.querySelector('[pokemon-img]')
const nextPoke = document.querySelector('[proximo-poke]')
const prevPoke = document.querySelector('[anterior-poke]')


const getPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(e => {
            pokemon_id.innerHTML = e.id
            pokemon_nome.innerHTML = e.name
            pokemon_img.src = e['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            return this.id
        })
        .catch(err => console.log('Ocorreu um erro!'))
}

const nextPrevPoke = () => {
    input.value = input.value == '' ? 1 : input.value;
    let currentID = parseInt(input.value);
    
    nextPoke.addEventListener('click', e => {
        ++currentID
        currentID > 1010 ? currentID = 1 : currentID
        getPokemon(currentID)
    })

    prevPoke.addEventListener('click', e => {
        --currentID
        currentID < 1 ? currentID = 1010 : currentID
        getPokemon(currentID)
    })

    search.addEventListener('click', () => {
        currentID = input.value;
        getPokemon(currentID);
    });
}


nextPrevPoke()