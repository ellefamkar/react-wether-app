import React from 'react';
import "./WeatherBackground.css";
import snow from "../images/snow.jpg";
import clearSky from "../images/clearSky.jpg";
import cloudy from "../images/cloudy-1.jpg";
import scatteredCloud from "../images/scatteredClouds.jpg";
import rain from "../images/rain.webp";
import thunderStorm from "../images/thunderStorm.jpg";
import fog from "../images/fog-1.jpg";

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
        "mist-day": "fog",
        "mist-night": "fog"
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
    }else if(codeMaping[description] === "fog"){
        return (
            <div className='Weather-bg-container'>
                <img src={fog} alt={description} />
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