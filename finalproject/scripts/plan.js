import { membershipLevels } from "../data/data.js";

displayMembershipLevels(membershipLevels);

function displayMembershipLevels(levels) {
    const levelsSection = document.querySelector('#level-cards');

    levels.forEach((level) => {
        let card = document.createElement('section');
        let title = document.createElement('h3');
        let benefitButton = document.createElement('button');

        card.setAttribute('class', 'mCard');
        card.setAttribute('id', level.memberLevel);

        title.innerHTML = level.title;
        benefitButton.innerHTML = 'Learn More';

        benefitButton.addEventListener('click', () => showStuff(level));

        card.appendChild(title);
        card.appendChild(benefitButton);
        levelsSection.appendChild(card);
    });
}

// -------- MODAL --------

const dialogBox = document.querySelector('#dialog-box');
const myTitle = document.querySelector('#dialog-box h2');
const myCost = document.querySelector('#my-cost');
const myBenefitsList = document.querySelector('#dialog-box ul');
const closeButton = document.querySelector('#cbutton');

closeButton.addEventListener('click', () => dialogBox.close());

function showStuff(x) {
    dialogBox.setAttribute('class', x.memberLevel);
    myTitle.innerHTML = x.title;

    myCost.innerHTML = `Cost: Free (Project Demo)`;

    let benefitList = ``;
    x.benefits.forEach((line) => {
        benefitList += `<li>${line}</li>`;
    });

    myBenefitsList.innerHTML = benefitList;

    dialogBox.showModal();
}
