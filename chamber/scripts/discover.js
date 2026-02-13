const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const navButton = document.querySelector('#nav-button');
const mainnav = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    mainnav.classList.toggle('show');
});

let lastDate = null;
const currentVisit = Date.now();
// const dateFromString = new Date("2025-03-25");

if (localStorage.getItem('currentVisit') != null) {
    localStorage.setItem('lastVisit', localStorage.getItem('currentVisit'));
}

if (localStorage.getItem('lastVisit') != null) {
    lastDate = localStorage.getItem('lastVisit');
}

localStorage.setItem('currentVisit', currentVisit);

let difference = Math.floor((Math.abs(lastDate - currentVisit)) / (1000 * 60 * 60 * 24));
let visit = document.querySelector("#date");
console.log(difference)
if (lastDate == null) {
    visit.textContent = "Welcome! Let us know if you have any questions.";
} else if (difference < 1) {
    visit.textContent = "Back so soon! Awesome!";
} else if (difference < 2) {
    visit.textContent = `You last visited 1 day ago.`;
} else {
    visit.textContent = `You last visited ${difference} days ago.`;
}


import { places } from "../data/data.mjs";
console.log(places);

//-- here where we display the items //
const showHere = document.querySelector("#allplaces");


// LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(places) {
    places.forEach(x => {
        //here we build the card element where will be all the data
        const thecard = document.createElement('div');
        //build the photo element
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo_url}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);
        // build the title element
        const thetitle = document.createElement('h3')
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);
        //build the address element
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);
        //build the description element
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        showHere.appendChild(thecard)
    }); //end loop
}// end function

displayItems(places);
