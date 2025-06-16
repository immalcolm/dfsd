const API_KEY = `8ea49a70241b4c7ce4839766bcd9f267`;
const GIPHY_API_KEY = `F4VkYSgZ5Iq3QLMa6qEvTL8wYbwBpiUw`;
const UNSPLASH_API_KEY = `opjrWLT_Gdj7VVDXpv5iYB8eu_bpZjjjAfZqh_rCXKc`; // Replace with your Unsplash API key

const weatherBtn = document.getElementById("weatherBtn");

weatherBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherBox = document.getElementById("weatherBox");

  // OpenWeatherMap (replace 'YOUR_API_KEY')
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const weatherData = await weatherRes.json();

  const main = weatherData.weather[0].main.toLowerCase();
  const temp = weatherData.main.temp;
  const description = weatherData.weather[0].description;

  // GIPHY API for matching gif
  const gifRes = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${main}&limit=1`
  );
  const gifData = await gifRes.json();
  const gifUrl = gifData.data[0]?.images.original.url || "";

  weatherBox.innerHTML = `
        <h2>${city}</h2>
        <p>${description}, ${temp}&deg;C</p>
        <img src="${gifUrl}" alt="${main} gif" />
      `;

  // Unsplash API for weather background
  const imgRes = await fetch(
    `https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}&per_page=1`
  );
  const imgData = await imgRes.json();
  const bgUrl = imgData.results[0]?.urls?.regular || "";

  document.body.style.backgroundImage = `url('${bgUrl}')`;
}
