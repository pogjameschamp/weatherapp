let weather = {
    "apiKey": "10e8285ab7d82d5b0dc08199a1aa986a",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=10e8285ab7d82d5b0dc08199a1aa986a"
        ).then((response) => response.json())
        .then((data) => console.log(data))
    }
}