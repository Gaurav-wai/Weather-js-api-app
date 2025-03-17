const searchInput = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const locationBtn = document.querySelector(".location-btn");
const cityDisplay = document.getElementById("cityName");
const temperatureDisplay = document.getElementById("temperature");
const conditionDisplay = document.getElementById("weatherCondition");
const humidityDisplay = document.getElementById("humidity");
const windDisplay = document.getElementById("windSpeed");
const pressureDisplay = document.getElementById("pressure");
const sunriseDisplay = document.getElementById("sunrise");
const sunsetDisplay = document.getElementById("sunset");
const forecastContainer = document.getElementById("fiveDayForecast");
const hourlyContainer = document.getElementById("hourlyForecast");

const apiKey = "953d2721ce581801b172bd212f514a10";


//dark-light mode



//mumbai

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const locationBox = document.querySelector(".location-box");

    function applyDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add("dark-mode");
            locationBox.classList.remove("bg-dark", "text-white");
            locationBox.classList.add("bg-white", "text-dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            locationBox.classList.remove("bg-white", "text-dark");
            locationBox.classList.add("bg-dark", "text-white");
            localStorage.setItem("darkMode", "disabled");
        }
    }

    // Load the theme from localStorage
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    darkModeToggle.checked = darkModeEnabled;
    applyDarkMode(darkModeEnabled);

    // Toggle when switching modes
    darkModeToggle.addEventListener("change", function () {
        applyDarkMode(this.checked);
    });
});




//right side

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const locationBox = document.querySelector(".weather-box");

    function applyDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add("dark-mode");
            locationBox.classList.remove("bg-dark", "text-white");
            locationBox.classList.add("bg-white", "text-dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            locationBox.classList.remove("bg-white", "text-dark");
            locationBox.classList.add("bg-dark", "text-white");
            localStorage.setItem("darkMode", "disabled");
        }
    }

    // Load the theme from localStorage
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    darkModeToggle.checked = darkModeEnabled;
    applyDarkMode(darkModeEnabled);

    // Toggle when switching modes
    darkModeToggle.addEventListener("change", function () {
        applyDarkMode(this.checked);
    });
});


//forecast and hourly

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const locationBox = document.querySelectorAll(".forecast-box");

    function applyDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add("dark-mode");
            locationBox.classList.remove("bg-dark", "text-white");
            locationBox.classList.add("bg-white", "text-dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            locationBox.classList.remove("bg-white", "text-dark");
            locationBox.classList.add("bg-dark", "text-white");
            localStorage.setItem("darkMode", "disabled");
        }
    }

    // Load the theme from localStorage
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    darkModeToggle.checked = darkModeEnabled;
    applyDarkMode(darkModeEnabled);

    // Toggle when switching modes
    darkModeToggle.addEventListener("change", function () {
        applyDarkMode(this.checked);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const locationBox = document.querySelector(".hourly-box");

    function applyDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add("dark-mode");
            locationBox.classList.remove("bg-dark", "text-white");
            locationBox.classList.add("bg-white", "text-dark");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            locationBox.classList.remove("bg-white", "text-dark");
            locationBox.classList.add("bg-dark", "text-white");
            localStorage.setItem("darkMode", "disabled");
        }
    }

    // Load the theme from localStorage
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    darkModeToggle.checked = darkModeEnabled;
    applyDarkMode(darkModeEnabled);

    // Toggle when switching modes
    darkModeToggle.addEventListener("change", function () {
        applyDarkMode(this.checked);
    });
});



//code
console.log("running good!")

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        if (searchInput.value.trim()!=''){
        updateWeatherInfo(searchInput.value);
        searchInput.value='';
        searchInput.blur();
        }
    });
}


async function updateWeatherInfo(city){
    const weatherData = await getFetchData('weather',city);
if (weatherData.cod != 200){
    console.log("city not found!!")
}
else{
    console.log(weatherData);
       // Extract necessary data
       const { name, dt, timezone } = weatherData;
       const currentDate = new Date((dt + timezone) * 1000); // Adjusting for timezone
       
       // Format date and time
       const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
       const formattedDate = currentDate.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' });

       // Update UI
       document.getElementById("cityName").textContent = name;
       document.getElementById("currentTime").textContent = formattedTime;
       document.getElementById("currentDate").textContent = formattedDate;




       //second right card


         // Extract necessary data
         const { name: cityName, main, wind, weather, sys } = weatherData;


    // Update the main weather details
    document.getElementById("cityName").textContent = cityName;
    document.getElementById("temperature").textContent = `${Math.round(main.temp)}°C`;
    document.getElementById("feelsLike").textContent = `${Math.round(main.feels_like)}°C`;
    document.getElementById("humidity").textContent = `${main.humidity}`;
    document.getElementById("windSpeed").textContent = `${wind.speed}`;
    document.getElementById("pressure").textContent = `${main.pressure}`;
    
    // Convert sunrise/sunset timestamps
    const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.getElementById("sunrise").textContent = sunriseTime;
    document.getElementById("sunset").textContent = sunsetTime;

    // Update weather condition and icon
    const weatherCondition = weather[0].main;
    document.getElementById("weatherCondition").textContent = weatherCondition;

    // Change icon dynamically
    const weatherIconMap = {
        "Clear": "clear.png",
        "Clouds": "clouds.png",
        "Rain": "rain.png",
        "Snow": "snow.png",
        "Thunderstorm": "thunderstorm.png",
        "Drizzle": "drizzle.png",
        "Mist": "mist.png"
    };

    const weatherIcon = weatherIconMap[weatherCondition] || "clear.png";
    document.getElementById("weatherIcon").src = weatherIcon;
}
   }



searchInput.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter' && searchInput.value.trim()!=''){
        updateWeatherInfo(searchInput.value);
        searchInput.value='';
        searchInput.blur();
}
})



async function getFetchData(endPoint, city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    return response.json();
}