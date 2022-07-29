const cardModel = (pokemon) =>{
            let name = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);
            let hp = pokemon.stats[0].base_stat;

            let picture = pokemon.sprites.other["official-artwork"].front_default;

            return `<div class="card-header">
                <h2 class="card-title"> ${name} </h2>
                <p class="card-hp">HP ${hp}</p>
            </div>
            <div class="card-img">
                <img class="card-img" src="${picture}" alt="">
            </div>
            <div class="card-description">
                <h3>Descrição</h3>
                <div>Os Pikachus são pequenos roedores de quarenta centímetros e de seis quilogramas, com um corpo
                    redondo, pernas curtas e uma longa cauda, quando macho, a cauda tem um formato de um raio, mas se o
                    Pikachu for fêmea sua cauda ganha um coração na ponta.</div>
            </div>`
}