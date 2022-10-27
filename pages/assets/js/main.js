const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 100
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {
            const newHtml = pokemons.map(convertPokemonToLi).join('')
            pokemonList.innerHTML += newHtml
            console.log('peguei')
        }).then(() => hoverPokemonLiEvent())
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }


})

//-----------------------------------------------------------------//

function hoverPokemonLiEvent() {
    let pokemonLi = document.querySelectorAll("li.pokemon");
    pokemonLi.forEach(element => {
        let color = getComputedStyle(element).backgroundColor;
        color = "rgb(" + color.match(/[0-9]+/g).map(element => Number(element) - 40).join(",") + ")"
        
        element.addEventListener("mouseenter", () => {
            element.style.transition = "125ms"
            element.style.boxShadow = `0px 0px 3px 3px ${color}`
        })

        element.addEventListener("mouseleave", () => {
            element.style.transition = "500ms"
            element.style.boxShadow = `none`
        })
    })
}
