document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weatherForm');
    const weatherInfo = document.getElementById('weatherInfo');

    weatherForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(weatherForm);
        const city = formData.get('city');

        try {
            const response = await fetch(`http://127.0.0.1:3000/weather?city=${encodeURIComponent(city)}`);
            const weatherData = await response.json();

            // Display weather information
            weatherInfo.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p><strong>Temperature:</strong> ${weatherData.temperature}</p>
                <p><strong>Description:</strong> ${weatherData.description}</p>
            `;
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        }
    });
});
