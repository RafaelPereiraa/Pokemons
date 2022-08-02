let pokemon;
let id = 0;

const pokemonRequest = async (id) => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    let pokemon = await fetch(getPokemonUrl(id)).then(response => response.json())

    return pokemon;
}

const pokemonDescription = async (id) => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon-species/${id}`

    let description = await fetch(getPokemonUrl(id)).then(response => response.json())
    return description;
}

const pokemonColor = async (name) => {
    let colorId = 1;
    const getPokemonColor = `https://pokeapi.co/api/v2/pokemon-color/`;
    let listByColor;

    try {
        while (colorId <= 10) {
            listByColor = await fetch(getPokemonColor + colorId).then(response => response.json());
            if (listByColor.pokemon_species.some(pokemon => pokemon.name === name)) {
                break;
            } else {
                colorId += 1;
            }
        }
        if (colorId == 11) throw 'Pokemon not found!';
    } catch (err) {
        console.log(err)
        return;
    }

    return colorSchema(listByColor.name);
}


const colorSchema = (colorName) => {

    colors = [
        {
            name: 'black',
            borderColor: '#000000c4',
            borderInsetShadow: '#00000038'
        },
        {
            name: 'blue',
            borderColor: '#0043ffc4',
            borderInsetShadow: '#0043ff38'
        },
        {
            name: 'brown',
            borderColor: '#CC9966c4',
            borderInsetShadow: '#CC996638'
        },
        {
            name: 'gray',
            borderColor: '#D1D1E0c4',
            borderInsetShadow: '#D1D1E038'
        },
        {
            name: 'green',
            borderColor: '#64D364c4',
            borderInsetShadow: '#64D36438'
        },
        {
            name: 'pink',
            borderColor: '#F4BDC9c4',
            borderInsetShadow: '#F4BDC938'
        },
        {
            name: 'purple',
            borderColor: '#C183C1c4',
            borderInsetShadow: '#C183C138'
        },
        {
            name: 'red',
            borderColor: '#EC8484c4',
            borderInsetShadow: '#EC848438'
        },
        {
            name: 'white',
            borderColor: '#FFFFFFc4',
            borderInsetShadow: '#FFFFFF38'
        },
        {
            name: 'yellow',
            borderColor: '#FFFF99c4',
            borderInsetShadow: '#FFFF9938'
        }
    ]

    return colors.find(color => color.name == colorName)
}













