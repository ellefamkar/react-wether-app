import React from "react";
import FormattedDate from "./FormattedDate";

const Weather = ({weather})=>{
    return(
        <div className="weather-details mt-4">
                    <h1 className="weather-name text-white position-absolute">{weather.name}</h1>
                    <div className="weather-icon text-center">
                        <img src={weather.icon}  alt={weather.description}/>
                    </div>
                    <h2 className="weather-temperature text-white text-center mb-0">{weather.temperature}℃</h2>
                    <ul className="weather-description text-white p-0">
                        <li>{weather.description} <FormattedDate date={weather.date} /></li>
                        <li>Humidity: {weather.humidity}</li>
                    </ul>
                </div>
    );
};

export default Weather;