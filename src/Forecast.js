import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";


export default function Forecast (props){
  let [loaded, setLoaded] = useState (false);
  let [forecastData, setForecastData] = useState (null);
  
  useEffect(() => {
  setLoaded(false);
  }, [props.coordinates]);

  function showForecast(response){
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function searchUrl(){
    const apiKey = "ed8ab9018735ed237ff0af3c6f9509f3";
    let apiUnits = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${apiUnits}`
    axios.get(apiUrl).then(showForecast);
  }
  
  if (loaded){
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function(dailyForecast, index) {
            if(index < 5){
              return(
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
          } else {
            return null;
          }
          })}
        </div>
      </div>
    );
  } else {
    searchUrl(); 
    return null;
  }
}