<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather Forecast</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Weather Forecast</h1>
    <form id="weatherForm">
      <input type="text" id="cityInput" placeholder="Enter city">
      <button type="submit">Get Forecast</button>
    </form>
    <div id="weatherInfo"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
.body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.container {
  max-width: 500px; 
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#weatherInfo {
  text-align: center;
}
[1:15 pm, 11/03/2024] Madhurya Reddy: document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('cityInput').value;
  getWeather(city);
});

async function getWeather(city) {
  try {
    const apiKey = '79b43af6524abc7e6d6bcf855dcbdc3f';
    const response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey});
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  if (data.cod === 200) {
    const cityName = data.name;
    const temperature = (data.main.temp - 273.15).toFixed(1); // Convert temperature from Kelvin to Celsius
    const description = data.weather[0].description;
    weatherInfo.innerHTML = <h2>${cityName}</h2><p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>;
  } else {
    weatherInfo.innerHTML = '<p>City not found</p>';
  }
}
