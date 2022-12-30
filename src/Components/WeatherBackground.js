import React from 'react';
import "./WeatherBackground.css";

const WeatherBackground = ({description}) => {
    // const codeMaping = {
    //     // "clear-sky-day": "CLEAR_DAY",
    //     // "clear-sky-night": "CLEAR_DAY",
    //     // "few-clouds-day": "PARTLY_CLOUDY_DAY",
    //     // "few-clouds-night": "PARTLY_CLOUDY_DAY",
    //     // "scattered-clouds-day": "CLOUDY",
    //     // "scattered-clouds-night": "CLOUDY",
    //     // "broken-clouds-day": "CLOUDY",
    //     // "broken-clouds-night": "CLOUDY",
    //     // "shower-rain-day": "RAIN",
    //     // "shower-rain-night": "RAIN",
    //     // "rain-day": "RAIN",
    //     // "rain-night": "RAIN",
    //     // "thunderstorm-day": "SLEET",
    //     // "thunderstorm-night": "SLEET",
    //     "snow-day": "SNOW",
    //     "snow-night": "SNOW",
    //     "mist-day": "FOG",
    //     "mist-night": "FOG"
    // } 

    return (
        <div className='Weather-bg-container'>
            <img src='./images/snow-5.jpg' alt={description} />
        </div>
    );
};

export default WeatherBackground;