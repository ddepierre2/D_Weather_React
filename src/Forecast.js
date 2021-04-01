import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";


export default function Forecast (props){
  let [loaded, setLoaded] = useState (false);
  let [forecastData, setForecastData] = useState (null);
  
  function showForecast(response){
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded){
        return (
        <div className="Forecast">
          <div className="row">
            <div className="col">
           <ForecastDay data={forecastData[0]} />
          </div>
          </div>
        </div>
      );
  } else {
      const apiKey = "ed8ab9018735ed237ff0af3c6f9509f3";
      let apiUnits = "metric";
      let latitude = props.coordinates.lat;
      let longitude = props.coordinates.lon;
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${apiUnits}`
      axios.get(apiUrl).then(showForecast);

    return null;
  }
}