import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./Forecast.css";


export default function Forecast (){
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