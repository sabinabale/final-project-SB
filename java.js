function displayTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#degrees");
    tempElement.innerHTML = temperature
    let city = response.data.name;
    let cityElement = document.querySelector("h1");
    cityElement.innerHTML = city;
}

let apiKey = `b36d8c31375cd555d60e0282d53875ba`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature)