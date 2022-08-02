const cardModel = (pokemon, description) =>{
            let name = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);
            let hp = pokemon.stats[0].base_stat;
            let picture = pokemon.sprites.other["official-artwork"].front_default;
            
            description = languageTest(description.flavor_text_entries);

            

            return `<div class="card-header">
                <h2 class="card-title"> ${name} </h2>
                <p class="card-hp">HP ${hp}</p>
            </div>
            <div class="card-img">
                <img class="card-img" src="${picture}" alt="">
            </div>
            <div class="card-description">
            <div class="card-description-header">
                <h3>Info</h3>
                <a href="https://bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)" target="_blank"><img alt="bulbapedia" class="bulbapedia-link" src="https://bulbapedia.bulbagarden.net/favicon.ico"></a>
            </div>
                <div class="card-description-text">${description.replace(/\f/g, ' ')} </div>
            </div>`
}

function languageTest(flavor_text_entries){
    for (let i = 0; i < flavor_text_entries.length; i++){
        if (flavor_text_entries[i].language.name == 'en'){
            return flavor_text_entries[i].flavor_text;
        }
    }    
}