import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature (props){
const [unit, setUnit] = useState ("metric");
function fahrenheitConvert(event){
event.preventDefault();
setUnit("imperial");
}

function celsiusConvert(event){
event.preventDefault();
setUnit("metric");
}

if (unit === "metric"){
  return(
  <span>
  <div className="card-body float-left">
    <strong className="now-temp">{props.celsius}</strong>
    °C | <a href="/" onClick={fahrenheitConvert}>°F</a>
  </div>
</span>
  );
} else {
  let fahrenheit = Math.round((props.celsius * 9/5) + 32);
 return(
  <span>
  <div className="card-body float-left">
    <strong className="now-temp">{fahrenheit}</strong>
    <a href="/" onClick={celsiusConvert}>°C</a> | °F
  </div>
</span>
  );

}
}