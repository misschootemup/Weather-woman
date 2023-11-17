var APIkey = "f491da7a73f1e382aec135cd9d8dd0a7" 
var forecastURL ="https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}&units=imperial"

function getWeather (city){
    var currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=imperial`
    fetch (currentURL)
    .then((response)=>{
        console.log (response)
        return response.json()
    }) .then((data)=>{
        console.log (data)
        getForecast (data.coord.lat, data.coord.lon)
    })
    
}
function getForecast (lat, lon){
    var forecastURL =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`
fetch (forecastURL)
.then((response)=>{
    console.log (response)
    return response.json()
}) .then((data)=>{
    console.log (data)
})
}
document.querySelector("#search-btn").addEventListener("click", ()=>{
    var input = document.querySelector (#)
    getWeather()
})