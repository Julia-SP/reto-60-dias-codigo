const API_KEY = 'tu_key'; 

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');

// Elementos a actualizar
const elements = {
    cityName: document.getElementById('cityName'),
    temperature: document.getElementById('temperature'),
    weatherDesc: document.getElementById('weatherDesc'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    feelsLike: document.getElementById('feelsLike'),
    weatherIcon: document.getElementById('weatherIcon')
}

async function getWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if(!response.ok) throw new Error('Ciudad no encontrada');
        
        const data = await response.json();
        return data;
        
    } catch(error) {
        showError(error.message);
    }
}

function updateUI(data) {
    elements.cityName.textContent = `${data.name}, ${data.sys.country}`;
    elements.temperature.textContent = Math.round(data.main.temp);
    elements.weatherDesc.textContent = data.weather[0].description;
    elements.humidity.textContent = `${data.main.humidity}%`;
    elements.windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    elements.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    elements.weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    weatherInfo.classList.remove('error');
}

function showError(message) {
    weatherInfo.classList.add('error');
    weatherInfo.setAttribute('data-error', message);
}

// Event Listeners
searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    console.log("Buscando ciudad:", city);
    if(!city) return;
    
    const data = await getWeatherData(city);
    console.log("Datos obtenidos:", data);
    if(data) updateUI(data);
});

cityInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') searchBtn.click();
});
