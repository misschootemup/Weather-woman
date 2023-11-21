var APIkey = "f491da7a73f1e382aec135cd9d8dd0a7"
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}&units=imperial"

function getWeather(city) {
    var currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    fetch(currentURL)
        .then((response) => {
            return response.json()
        }).then((data) => {
            getForecast(data)
        })

}
function getForecast(current) {
    let lat = current.coord.lat;
    let lon = current.coord.lon;
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
    fetch(forecastURL)
        .then((response) => {
            return response.json()
        }).then(({list}) => {
            console.log(current, list)

            let currentDiv = document.getElementById('mainDiv');

            currentDiv.innerHTML = `
                <h1>${current.name} (${new Date(current.dt*1000).toDateString()}) <img src="https://openweathermap.org/img/w/${current.weather[0].icon}.png" /></h1>
                <p>Temp: ${current.main.temp}</p>
                <p>Wind: ${current.wind.speed}</p>
                <p>Humidity: ${current.main.humidity}</p>
            `;

            let forecastDiv = document.getElementById('forecastContainer');

            forecastContainer.innerHTML = '';

            for (let i = 0; i < list.length; i=i+8) {
                forecastContainer += `
                <div>
                    <h3>${new Date(list[i].dt*1000).toDateString()}</h3>
                    <img src="https://openweathermap.org/img/w/${list[i].weather[0].icon}.png" />
                </div>
                `;
            }
        })
}
document.querySelector("#search-btn").addEventListener("click", () => {
    var input = document.querySelector('input').value;
    getWeather(input);
})