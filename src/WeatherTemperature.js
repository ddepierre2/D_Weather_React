import React, { useState } from "react";

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
  <span className="celsiusDegree">
    <strong>{props.celsius}</strong>
    °C | <a href="/" onClick={fahrenheitConvert}>°F</a></span>
  );
} else {
  let fahrenheit = Math.round((props.celsius * 9/5) + 32);
 return(
  <span className="fahrenheitDegree">
    <strong>{fahrenheit}</strong>
    <a href="/" onClick={celsiusConvert}>°C</a> | °F </span>
  );

}
}