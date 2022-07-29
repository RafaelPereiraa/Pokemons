let pokemon;
let id = 0;

const pokemonRequest = async (id) => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    let pokemon = await fetch(getPokemonUrl(id)).then(response => response.json())

    return pokemon;
}

async function flipCard(direction) {
    let card = document.getElementById('card');
    if (direction == '-'){
        id > 1 ? id--:id = 1; 
    } else {
        id++;
    }
    await pokemonRequest(id).then(pokemon => card.innerHTML = cardModel(pokemon));

 
}











