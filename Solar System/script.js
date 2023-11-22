import planets from './planets.js'


const image = document.getElementById("image-container");
const character = document.getElementById("planet-name");
const title = document.getElementById("planet-mass");
const bounty = document.getElementById("rings");
const text = document.getElementById("description");

const btnPrevious = document.querySelector(".btn.previous");
const btnNext = document.querySelector(".btn.next");

let current = 0;

function showItem() {
    const item = planets[current];
    image.src = item.image;
    character.textContent = item.name;
    title.textContent = "Mass: " + item.mass;
    bounty.textContent = "Rings: " + item.hasRings;
    text.textContent = item.description;
}

document.addEventListener('DOMContentLoaded', () => {
    showItem();
});

btnPrevious.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = planets.length - 1;
    }
    showItem();
});

btnNext.addEventListener('click', () => {
    current++;
    if (current > planets.length-1) {
        current = 0;
    }
    showItem();
});