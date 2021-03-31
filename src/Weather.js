import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherInfo, setWeatherInfo] = useState ({ready:false});

function axiosCall (response) {
  setWeatherInfo({
    ready: true,
    city: response.data.name,
    date: "Thursday, March 5, 2021",
    time: "15:32",
    temperature: Math.round(response.data.main.temp),
    image: `http://openweathermap.org/img/wn/10n@2x.png`,
    description: response.data.weather[0].description,
    humidity: Math.round(response.data.main.humidity),
    windspeed: Math.round(response.data.wind.speed),
    sunrise: "6:20",
    sunset: "19:10"
  })};

  if (weatherInfo.ready){
  
   return ( 
   
  <div className="Weather">
        <form className="location-form">
        <input type="search" placeholder="Enter your city" autoComplete="off" />
        <input type="submit" className="search-button" value="Search" />
        <button className="current-location-button">Current Location</button>
      </form>

      <section className="current-location">
        <div className="container">
          <h2 className="searched-city">{weatherInfo.city}</h2>

          <div className="row">
            <div className="card col-3 transparency">
              <h3> Date and Time</h3>
              <div className="card-body">
                <p className="card-text">{weatherInfo.date}</p>
                <p className="card-text">{weatherInfo.time}</p>
              </div>
            </div>

            <div className="card col-6 transparency">
              <h3>Temperature</h3>
              <div className="row">
                <div className="card-body col-3 float-left">
                  <img src={weatherInfo.image} alt={weatherInfo.description} />
                </div>

                <div className="card-body col-4 float-left">
                  <strong className="now-temp">{weatherInfo.temperature}</strong>
                  <a href="/">°C</a> | <a href="/">°F</a>
                </div>

                <div className="card-body float-left">
                  <ul className="temperature-description-box">
                    <li className="card-text">{weatherInfo.description}</li>
                    <li className="card-text">Humidity: {weatherInfo.humidity}%</li>
                    <li className="card-text">
                      Wind Speed: {weatherInfo.windspeed} KM/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card col-3 transparency">
              <div className="card-header">
                <h4>Sunrise:</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item transparency">
                  {weatherInfo.sunrise}
                </li>
              </ul>
              <div className="card-header">
                <h4>Sunset:</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item transparency">
                  {weatherInfo.sunset}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  );
   } else{

  const apiKey = "ed8ab9018735ed237ff0af3c6f9509f3"
  let apiUnits = "metric"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${apiUnits}`
  axios.get(apiUrl).then(axiosCall);
  return(<p>Loading</p>);
   }
}

