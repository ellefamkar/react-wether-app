import React from 'react';
import "./WeatherBackground.css";
import snow from "../images/snow.jpg";
import clearSky from "../images/clearSky.jpg";
import cloudy from "../images/cloudy.jpg";
import scatteredCloud from "../images/scatteredCloud.jpg";
import rain from "../images/rain.jpg";
import thunderStorm from "../images/thunderStorm.jpg";
import mist from "../images/mist.jpg";

const WeatherBackground = ({description}) => {
    const codeMaping = {
        "clear-sky-day": "clear-sky",
        "clear-sky-night": "clear-sky",
        "few-clouds-day": "cloudy",
        "few-clouds-night": "cloudy",
        "scattered-clouds-day": "scattered-cloud",
        "scattered-clouds-night": "scattered-cloud",
        "broken-clouds-day": "scattered-cloud",
        "broken-clouds-night": "scattered-cloud",
        "shower-rain-day": "rain",
        "shower-rain-night": "rain",
        "rain-day": "rain",
        "rain-night": "rain",
        "thunderstorm-day": "thunderstorm",
        "thunderstorm-night": "thunderstorm",
        "snow-day": "snow",
        "snow-night": "snow",
        "mist-day": "mist",
        "mist-night": "mist"
    };
    if(codeMaping[description] === "clear-sky"){
        return (
            <div className='Weather-bg-container'>
                <img src={clearSky} alt={description} />
            </div>
        );
    }else if(codeMaping[description] === "cloudy"){
        return (
            <div className='Weather-bg-container'>
                <img src={cloudy} alt={description} />
            </div>
        );
    }else if(codeMaping[description] === "scattered-cloud"){
        return (
            <div className='Weather-bg-container'>
                <img src={scatteredCloud} alt={description} />
            </div>
        );
    }else if(codeMaping[description] === "snow"){
        return (
            <div className='Weather-bg-container'>
                <img src={snow} alt={description} />
            </div>
        );
    } else if(codeMaping[description] === "rain"){
        return (
            <div className='Weather-bg-container'>
                <img src={rain} alt={description} />
            </div>
        );
    }else if(codeMaping[description] === "mist"){
        return (
            <div className='Weather-bg-container'>
                <img src={mist} alt={description} />
            </div>
        );
    }else{
        return (
            <div className='Weather-bg-container'>
                <img src={thunderStorm} alt={description} />
            </div>
        );
    }
    
};

export default WeatherBackground;