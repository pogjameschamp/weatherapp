let weather = {
    "apiKey": "10e8285ab7d82d5b0dc08199a1aa986a",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        // changing all the variables to display the wanted city ones. Uses inner.text to change the values
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    // allow user to press magnifying glass to search
    document.querySelector(".search button").addEventListener("click", function () {
      weather.search();
    });
    
    // allow user to press enter to search
    document.querySelector(".search-bar").addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
});

// defaults to sydney
weather.fetchWeather("Sydney");
