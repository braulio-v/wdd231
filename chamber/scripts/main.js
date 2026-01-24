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

weatherElement.textContent = `
  ${weatherData.city}: ${weatherData.temperature}°C,
  ${weatherData.condition},
  Humidity: ${weatherData.humidity}% 
`;

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;