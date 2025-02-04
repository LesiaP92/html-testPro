const API_KEY = "84c0f9eff933adfa9cd3e3398e398c96";

async function getWeather() {
    const city = document.getElementById("citySelect").value;
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=${API_KEY}`
        );
        const data = await response.json();
        document.getElementById("city").textContent = data.name;
        document.getElementById("temperature").textContent = `Температура: ${Math.round(data.main.temp)}°C`;
        document.getElementById("weather").textContent = `Погода: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Вологість: ${data.main.humidity}%`;
        document.getElementById("pressure").textContent = `Тиск: ${data.main.pressure} hPa`;
        document.getElementById("wind").textContent = `Вітер: ${data.wind.speed} км/год`;

    } catch (error) {
        alert("Помилкa. Перевір API-ключ!");
    }
}

getWeather();