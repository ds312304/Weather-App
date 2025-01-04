const apiKey = "189986342317d2610b8d746a0eecebc2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png"; 
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sunny.png"; 
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainy.webp"; 
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"; 
    }
    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "images/mist.png"; 
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "images/haze.png"; 
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"; 
    }

    document.querySelector(".weather").style.display= "block";
    document.querySelector(".error").style.display ="none";
    }
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
});
