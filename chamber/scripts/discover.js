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


import { places } from "../data/data.mjs";
console.log(places);