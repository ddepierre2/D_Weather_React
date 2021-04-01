import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./Forecast.css";
import axios from "axios";


export default function Forecast (props){

  function showForecast(response){
    console.log(response.data);
  }
const apiKey = "ed8ab9018735ed237ff0af3c6f9509f3";
let apiUnits = "metric";
let latitude = props.coordinates.lat;
let longitude = props.coordinates.lon;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${apiUnits}`
axios.get(apiUrl).then(showForecast);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
         <div className="forecastDate">Thursday</div> 
          <WeatherIcon code="01d" size={15} />
          <div className="forecastTemp">
            <span className="forecast-temp-max">19° | </span> 
            <span className="forecast-temp-min">10°</span>
          </div>
       </div>













      </div>
    </div>
  )
}