const apiKey = "4f69fc6bd50bee53565aea374ca7aebb";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const weatherIcon = document.querySelector(".weather-icon");
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main === "Thunderstorm") {
    weatherIcon.src = "images/thunderstorm.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
