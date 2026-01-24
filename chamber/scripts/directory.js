const navButton = document.querySelector('#nav-button');
const mainnav = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    mainnav.classList.toggle('show');
});

// fetching data from json

const linkJs = 'data/members.json';

const cards = document.querySelector("#members-container");

async function getMembersData() {
    const response = await fetch(linkJs);
    const data = await response.json();
    displayMembers(data.companies)
}

getMembersData();

const displayMembers = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement('section');
        const companyName = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const img = document.createElement('img');

        img.setAttribute('src', `images/${company.image}`);
        img.setAttribute('alt', `image of ${company.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '200');
        img.setAttribute('height', '200');

        companyName.textContent = `${company.name}`;
        p1.textContent = `Address: ${company.address}`;
        p2.textContent = `Phone: ${company.phone}`;
        p3.textContent = `Website: ${company.website}`;
        p4.textContent = `Level: ${company.membershipLevel}`;

        card.appendChild(companyName);
        card.appendChild(img)
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        cards.appendChild(card)
    });
}



const gridbutton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#members-container");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});


listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
})

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;