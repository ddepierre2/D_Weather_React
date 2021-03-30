import React from "react";
import axios from "axios";

export default function Weather(){
function handleResponse(response){
alert(`${response.data.main.temp}`);
}
let apiKey = "ed8ab9018735ed237ff0af3c6f9509f3"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);
return(
  <div><h2>Hello</h2></div>
);
}