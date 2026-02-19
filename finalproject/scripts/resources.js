const navButton = document.querySelector('#nav-button');
const mainnav = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    mainnav.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const topics = document.querySelectorAll(".topic h3");

topics.forEach(topic => {
    topic.addEventListener("click", () => {
        const content = topic.nextElementSibling;
        content.classList.toggle("print");
    });
});