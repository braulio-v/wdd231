import { benefits } from "../data/benefits.mjs";

// ---- VISIT MESSAGE ----

let lastDate = null;
const currentVisit = Date.now();

if (localStorage.getItem('currentVisit') != null) {
    localStorage.setItem('lastVisit', localStorage.getItem('currentVisit'));
}

if (localStorage.getItem('lastVisit') != null) {
    lastDate = localStorage.getItem('lastVisit');
}

localStorage.setItem('currentVisit', currentVisit);

let difference = Math.floor((Math.abs(lastDate - currentVisit)) / (1000 * 60 * 60 * 24));
let visit = document.querySelector("#date");

if (lastDate == null) {
    visit.textContent = "Welcome! Start your journey to B1 today 🚀";
} else if (difference < 1) {
    visit.textContent = "Back again! Keep improving your English!";
} else if (difference < 2) {
    visit.textContent = `You visited 1 day ago. Ready for the next step?`;
} else {
    visit.textContent = `You visited ${difference} days ago. Let's continue your progress!`;
}

// ---- DISPLAY BENEFITS ----

const showHere = document.querySelector("#allplaces");

function displayBenefits(items) {
    items.forEach(x => {

        const card = document.createElement('div');

        const photo = document.createElement('img');
        photo.src = `images/${x.photo_url}`;
        photo.alt = x.name;
        photo.loading = "lazy";

        const title = document.createElement('h3');
        title.innerText = x.name;

        const desc = document.createElement('p');
        desc.innerText = x.description;

        card.appendChild(photo);
        card.appendChild(title);
        card.appendChild(desc);

        showHere.appendChild(card);
    });
}

displayBenefits(benefits);


