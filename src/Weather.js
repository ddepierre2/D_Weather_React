import React from "react";
import "./Weather.css";



export default function Weather() {
  let Weather = {
    city: "Montreal",
    date: "Thursday, March 5, 2021",
    time: "15:32",
    temperature: 25,
    image: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    description: "Overcast",
    humidity: 2,
    windspeed: 15,
    sunrise: "6:20",
    sunset: "19:10"
  };
   return ( 
   
  <div className="Weather">
        <form className="location-form">
        <input type="search" placeholder="Enter your city" autoComplete="off" />
        <input type="submit" class="search-button" value="Search" />
        <button className="current-location-button">Current Location</button>
      </form>

      <section className="current-location">
        <div className="container">
          <h2 className="searched-city">{Weather.city}</h2>

          <div className="row">
            <div className="card col-3 transparency">
              <h3> Date and Time</h3>
              <div className="card-body">
                <p className="card-text">{Weather.date}</p>
                <p className="card-text">{Weather.time}</p>
              </div>
            </div>

            <div className="card col-6 transparency">
              <h3>Temperature</h3>
              <div className="row">
                <div className="card-body col-2 float-left">
                  <img src={Weather.image} alt={Weather.description} />
                </div>

                <div className="card-body col-4">
                  <strong className="now-temp">{Weather.temperature}</strong>
                  <a href="/">°C</a> | <a href="/">°F</a>
                </div>

                <div className="card-body float-left">
                  <ul className="temperature-description-box">
                    <li className="card-text">{Weather.description}</li>
                    <li className="card-text">Humidity: {Weather.humidity}%</li>
                    <li className="card-text">
                      Wind Speed: {Weather.windspeed} KM/h
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
                  {Weather.sunrise}
                </li>
              </ul>
              <div className="card-header">
                <h4>Sunset:</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item transparency">
                  {Weather.sunset}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  );
}

