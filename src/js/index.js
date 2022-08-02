const card = document.getElementById('card');
const button = document.querySelectorAll('button');
const flipButton = document.getElementById('flip-button')
let degreesToRotate = 180;

flipButton.addEventListener('click', () => {
    card.classList.contains('card-backface') ? degreesToRotate -= 180 : degreesToRotate += 180;
    flipCardAnimation(degreesToRotate)
    toggleBackFace()
});

card.addEventListener('transitionend', () => { id > 0 ? button[0].style.visibility = 'visible' : button[0].style.visibility = 'hidden' })

button.forEach(element => {
    element.onmouseover = function () {
        degreesToRotate += 15;
        flipCardAnimation(degreesToRotate)
    }
    element.onmouseout = function () {
        degreesToRotate -= 15;
        flipCardAnimation(degreesToRotate)
    }
    element.onclick = function () {
        flipCard(this.id);
    }
});

async function flipCard(direction) {
    let timeout;

    if (direction == 'left-button') {
        id > 1 ? id-- : id = 1;
    } else {
        id++;
    }

    if (card.classList.contains('card-backface')) {
        direction == 'left-button' ? degreesToRotate -= 180 : degreesToRotate += 180;
        flipCardAnimation(degreesToRotate);
        toggleBackFace();
        timeout = 440;
    } else {
        direction == 'left-button' ? degreesToRotate -= 360 : degreesToRotate += 360;
        flipCardAnimation(degreesToRotate);
        timeout = 210;
    }

    setTimeout(async () => {
        await pokemonRequest(id).then(async pokemon => {
            let colors;
            await pokemonColor(pokemon.name).then(colorSchema => colors = colorSchema)
            await pokemonDescription(id).then(description => {
                card.innerHTML = cardModel(pokemon, description);
                card.style.border = `1px solid ${colors.borderColor}`
                card.style.boxShadow = `inset 0px 0px 1px 10px ${colors.borderInsetShadow}`
            });
        })
    }, timeout);;
}

function flipCardAnimation(degreesToRotate) {
    card.style.transform = `rotateY(${degreesToRotate}deg)`;
}

function toggleBackFace() {
    if (card.classList.contains('card-backface')) {
        setTimeout(() => {
            card.style.backgroundImage = 'url(src/img/fundo-card-1.jpg)'
            card.classList.toggle('card-backface');
        }, 500);
    } else {
        setTimeout(() => {
            card.style.backgroundImage = 'url(src/img/Cardback.jpg)'
            card.classList.toggle('card-backface');
        }, 500)
    }
}