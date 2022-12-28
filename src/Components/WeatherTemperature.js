import React, {useState} from 'react';

const WeatherTemperature = ({celsius}) => {
    let[unit,setUnit] = useState("celsius");

    const convertToCelsius = (event) =>{
        event.preventDefault();
        setUnit("celsius");
    }

    const convertToFahrenheit = (event) =>{
        event.preventDefault();
        setUnit("farenheit");
    }

    const farenheit = () =>{
        return (celsius * 9/5) + 32
    }

    if(unit === "celsius"){
        return (
            <>
                {Math.round(celsius)} 
                <span className='mb-4 font-sm temperature-type'>
                    <a href='/' className='text-white text-decoration-none'> ℃</a>| <a href='/' className='text-white text-decoration-none' onClick={convertToFahrenheit}> ℉ </a>
                </span>
            </>
        );
    }else{
        return (
            <>
                {Math.round(farenheit())} 
                <span className='mb-4 font-sm temperature-type'>
                    <a href='/' className='text-white text-decoration-none' onClick={convertToCelsius}> ℃ </a> | <a href='/' className='text-white text-decoration-none' > ℉ </a>
                </span>
            </>
        );
    }
    
};

export default WeatherTemperature;