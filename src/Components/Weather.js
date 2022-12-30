import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherBackground from "./WeatherBackground";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

const Weather = ({weather})=>{
    return(
        <>
        <WeatherBackground description={weather.icon} />
        <div className="weather-details mt-4">
            <h1 className="weather-name text-white position-absolute">{weather.name}</h1>
            <div className="weather-icon text-center">
                <WeatherIcon code={weather.icon} />
            </div>
            <h2 className="weather-temperature text-white text-center mb-0">
                    <WeatherTemperature celsius={weather.temperature} />
            </h2>
            <ul className="weather-description text-white p-0">
                <li>{weather.description} <FormattedDate date={weather.date} /></li>
                {/* <li>Humidity: {weather.humidity}</li> */}
            </ul>
            <WeatherForecast />
        </div>
        </>
    );
};

export default Weather;