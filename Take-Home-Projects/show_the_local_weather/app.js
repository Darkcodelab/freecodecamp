let temp_h1 = document.getElementById("temp");
let place_h2 = document.getElementById("place");
let weatherInfo_p = document.getElementById("weather-info");
let weatherIcon_img = document.getElementById("weather-icon");
let tempToggle = document.getElementById("temp-toggle");
let date_p = document.getElementById("date");
let fah = false;

function getDate() {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  date_p.innerText = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

getDate();

tempToggle.addEventListener("click", () => {
  let t = temp_h1.innerText.split("").filter((e) => +e || e == "0" || e == ".");
  if (fah) {
    fah = false;
    tempToggle.innerHTML = "Fahrenheit &rlarr;";
    let celValue = (Number(t.join("") - 32) * (5 / 9)).toFixed(1);
    temp_h1.innerHTML = `${+celValue}<sup>&deg;C</sup>`;
  } else {
    fah = true;
    tempToggle.innerHTML = "Celsius &rlarr;";
    let fahValue = (Number(t.join("")) * 1.8 + 32).toFixed(1);
    temp_h1.innerHTML = `${+fahValue}<sup>F</sup>`;
  }
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      getWeatherReport(latitude, longitude);
    });
  } else {
    document.getElementById("errordiv").innerHTML =
      "Geolocation is not supported by this browser";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getLocation();
});

function getWeatherReport(lat, lon) {
  let URI = `https://weather-proxy.freecodecamp.rocks/api/current?lon=${lon}&lat=${lat}`;
  fetch(URI)
    .then((res) => res.json())
    .then((data) => {
      let weatherInfo = data.weather[0]["main"];
      let country = data.sys.country;
      let weatherIcon = data.weather[0]["icon"];
      let temp = data.main.temp;
      let place = data.name;

      weatherIcon_img.src = weatherIcon;
      temp_h1.innerHTML = `${temp}<sup>&deg;C</sup>`;
      place_h2.innerHTML = `${place}, ${country}`;
      weatherInfo_p.innerText = weatherInfo;
    })
    .catch((err) => console.log(err));
}
