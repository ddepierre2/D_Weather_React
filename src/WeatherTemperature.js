import React from "react";

export default function WeatherTemperature (props){
  return(
    <div className="WeatherTemperature">
    <span className="celsiusDegree">
    <strong className="nowTemp">{props.celsius}</strong>
    <span className="nowTempUnit">°C</span>
    </span>
    </div>
  );
}