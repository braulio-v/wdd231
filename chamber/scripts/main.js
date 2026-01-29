const navButton = document.querySelector('#nav-button');
const mainnav = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  mainnav.classList.toggle('show');
});


const weatherElement = document.getElementById("weather");

// Simulated weather data
const weatherData = {
    city: "Guayaquil",
    temperature: 31,
    condition: "Sunny",
    humidity: 70
};

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

p1.textContent = `${weatherData.city}: ${weatherData.temperature}°C`;
p2.textContent = `${weatherData.condition}`;
p3.textContent = `Humidity: ${ weatherData.humidity }% `
  
weatherElement.appendChild(p1);
weatherElement.appendChild(p2);
weatherElement.appendChild(p3);

const spotlight = [
  {
    name: "Cervecería Nacional",
    tagline: "Leading beverage company supporting local communities",
    email: "cerveceria@gmail.com",
    phone: "+593 4 259 8000",
    website: "https://www.cervecerianacional.ec",
    image: "cerveceria-nacional.jpg"
  },
  {
    name: "AMCHAM Guayaquil",
    tagline: "Promoting trade and investment between Ecuador and the U.S.",
    email: "amchan@gmail.com",
    phone: "+593 4 263 7100",
    website: "https://www.amchamgye.org.ec",
    image: "amcham-guayaquil.jpg"
  },
  {
    name: "Malecón 2000 Café & Market",
    tagline: "Local café offering food and products by the riverfront",
    email: "maleconcafe@gmail.com",
    phone: "+593 4 251 3000",
    website: "https://www.malecon2000.org.ec",
    image: "malecon-cafe.jpg"
  },
];

const spotsection = document.querySelector('#spotlight');

function getRandomBusinesses(array, number) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
}

const randomSpotlights = getRandomBusinesses(spotlight, 3);

randomSpotlights.forEach(business => {
  const spotlightc = document.createElement('section');

  const p4 = document.createElement('h4');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const p7 = document.createElement('p');
  const p8 = document.createElement('p');
  const img1 = document.createElement('img');

  p4.textContent = business.name;
  p5.textContent = business.tagline;
  p6.innerHTML = `<strong>EMAIL:</strong> ${business.email}`;
  p7.innerHTML = `<strong>PHONE:</strong> ${business.phone}`;
  p8.innerHTML = `<strong>WEBSITE:</strong> ${business.website}`;

  img1.src = `images/${business.image}`;
  img1.alt = `Image of ${business.name}`;
  img1.loading = 'lazy';
  img1.width = 150;
  img1.height = 150;

  spotlightc.appendChild(p4);
  spotlightc.appendChild(p5);
  spotlightc.appendChild(img1);
  spotlightc.appendChild(p6);
  spotlightc.appendChild(p7);
  spotlightc.appendChild(p8);

  spotsection.appendChild(spotlightc);
});


const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;