import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState ({ready:false});
  const [city, setCity] = useState (props.defaultCity);

function axiosCall (response) {
  setWeatherInfo({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: Math.round(response.data.main.temp),
    image: `http://openweathermap.org/img/wn/10n@2x.png`,
    description: response.data.weather[0].description,
    humidity: Math.round(response.data.main.humidity),
    windspeed: Math.round(response.data.wind.speed),
    sunrise: "6:20",
    sunset: "19:10"
  })};

  function search(){
    const apiKey = "ed8ab9018735ed237ff0af3c6f9509f3"
  let apiUnits = "metric"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`
  axios.get(apiUrl).then(axiosCall);
  }

  function searchCity(event){
event.preventDefault();
search();
  }

function handleSearchCity(event){
setCity(event.target.value);
}

  if (weatherInfo.ready){
   return ( 
     <div className="Weather">
        <form className="location-form" onSubmit={searchCity}>
        <input type="search" placeholder="Enter your city" autoComplete="off" onChange={handleSearchCity}/>
        <input type="submit" className="search-button" value="Search" />
        <button className="current-location-button">Current Location</button>
      </form>

    <WeatherData data={weatherInfo} />

    </div>
  );
   } else{
     search();
     return "Loading...";
   }
}

