const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "6b0f9d7c62240b62be76a43adeec6e80";
window.onload = () => {
  let welcomeCode = document.querySelector(".before_loading");
  let wheatherPage = document.querySelector(".fullPage");
  let header = document.querySelector(".heading");
  // let body = document.querySelector("body");
  setTimeout(() => {
    welcomeCode.style.display = "none";
    wheatherPage.style.display = "block";
    header.style.display = "block";
  }, 3000);
};
let weaterPage = document.querySelector(".wheather");
let condition_Image = document.querySelector(".wheatherImg");
let searchBox = document.querySelector(".searchBar input");
let search_button = document.querySelector(".searchBar button");
let input_field = document.querySelector(".searchBar input");
let search_btn = document.querySelector(".btn");
let Error = document.querySelector(".error");

async function checkWeather(City) {
  try {
    const weatherResponse = await fetch(`${URL}&q=${City}&appid=${apiKey}`);

    const data = await weatherResponse.json();
    console.log(data); // Check wh(at you get
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".humidityPercent").innerHTML =
      data.main.humidity + "%";

    document.querySelector(".WindSpeed").innerHTML = data.wind.speed + " m/s";

    if (data.weather[0].main == "Clouds") {
      condition_Image.src = "clouds.jpg";
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
    } else if (data.weather[0].main == "Clear") {
      condition_Image.src = "clear.jpg";
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
    } else if (data.weather[0].main == "Mist") {
      condition_Image.src = "mist.jpg";
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
    } else if (data.weather[0].main == "Thunderstorm") {
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
      condition_Image.src = "thunderstorm.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
      condition_Image.src = "drizzle.jpg";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
      condition_Image.src = "rain.jpg";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
      condition_Image.src = "snow.jpeg";
    } else {
      condition_Image.src = "other.png";
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C " + data.weather[0].main;
    }
  } catch (error) {
    console.error("Failed 😌 to fetch weather data:", error);
  }
}
search_button.addEventListener("click", () => {
  checkWeather(searchBox.value);
  searchBox.value = "";
});
searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);

    searchBox.value = "";
  }
});
