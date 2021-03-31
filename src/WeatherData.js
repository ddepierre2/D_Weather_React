import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherData (props){
return (
  <div className="WeatherData">

      <section className="current-location">
        <div className="container">
          <h2 className="searched-city">{props.data.city}</h2>

          <div className="row">
            <div className="card col-3 transparency">
              <h3> Date and Time</h3>
              <div className="card-body">
                <p className="card-text"><CurrentDate date={props.data.date} /></p>
              </div>
            </div>

            <div className="card col-6 transparency">
              <h3>Temperature</h3>
              <div className="row">
                  <div className="card-body col-3 float-left">
                    <WeatherIcon code={props.data.icon} />
                  </div>

                <WeatherTemperature celsius={props.data.temperature} />
              

                <div className="card-body float-left">
                  <ul className="temperature-description-box">
                    <li className="card-text">{props.data.description}</li>
                    <li className="card-text">Humidity: {props.data.humidity}%</li>
                    <li className="card-text">
                      Wind Speed: {props.data.windspeed} KM/h
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
                  {props.data.sunrise}
                </li>
              </ul>
              <div className="card-header">
                <h4>Sunset:</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item transparency">
                  {props.data.sunset}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
    </div>
)
}