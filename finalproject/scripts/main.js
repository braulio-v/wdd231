const navButton = document.querySelector('#nav-button');
const mainnav = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    mainnav.classList.toggle('show');
});

const topics = [
    // A1
    { level: "A1", title: "Simple Present" },
    { level: "A1", title: "Verb to be" },
    { level: "A1", title: "Subject Pronouns" },
    { level: "A1", title: "Articles (a / an / the)" },
    { level: "A1", title: "Basic Questions" },
    { level: "A1", title: "There is / There are" },

    // A2
    { level: "A2", title: "Simple Past" },
    { level: "A2", title: "Present Continuous" },
    { level: "A2", title: "Comparatives & Superlatives" },
    { level: "A2", title: "Countable & Uncountable Nouns" },
    { level: "A2", title: "Future with going to" },

    // B1
    { level: "B1", title: "Present Perfect" },
    { level: "B1", title: "Past Continuous" },
    { level: "B1", title: "Modal Verbs (should, must, might)" },
    { level: "B1", title: "Conditionals (zero / first)" },
    { level: "B1", title: "Gerunds & Infinitives (ING)" }
];

const list = document.getElementById("list");
const total = document.getElementById("total");

const allBtn = document.getElementById("all");
const a1Btn = document.getElementById("a1");
const a2Btn = document.getElementById("a2");
const b1Btn = document.getElementById("b1");

function renderTopics(topicArray) {
    list.innerHTML = "";

    topicArray.forEach(topic => {
        const card = document.createElement("div");
        card.classList.add("topic-card");

        card.innerHTML = `<h3>${topic.title}</h3>`;

        list.appendChild(card);
    });

    total.textContent = topicArray.length;
}

// Show all by default
renderTopics(topics);

// Button Events
allBtn.addEventListener("click", () => {
    renderTopics(topics);
});

a1Btn.addEventListener("click", () => {
    const filtered = topics.filter(topic => topic.level === "A1");
    renderTopics(filtered);
});

a2Btn.addEventListener("click", () => {
    const filtered = topics.filter(topic => topic.level === "A2");
    renderTopics(filtered);
});

b1Btn.addEventListener("click", () => {
    const filtered = topics.filter(topic => topic.level === "B1");
    renderTopics(filtered);
});

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;