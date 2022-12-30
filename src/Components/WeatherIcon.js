import React from "react";
import ReactAnimatedWeather from "react-animated-weather"

const WeatherIcon = ({code,size}) =>{
    const codeMaping = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day": "CLOUDY",
        "scattered-clouds-night": "CLOUDY",
        "broken-clouds-day": "CLOUDY",
        "broken-clouds-night": "CLOUDY",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "rain-day": "RAIN",
        "rain-night": "RAIN",
        "thunderstorm-day": "SLEET",
        "thunderstorm-night": "SLEET",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "FOG"
    }    
    return(
        <ReactAnimatedWeather
        icon={codeMaping[code]}
        color="white"
        size={size}
        animate={true}
        />
    );
};

export default WeatherIcon;