import React from 'react';
import WeatherIcon from "./WeatherIcon";

const WeatherForecastDay = () => {
    return (
        <div className='forecast-details col-2'>
            <p className='mb-2 text-white'>Thu</p>
            <div className="text-center mb-1">
                <WeatherIcon code="clear-sky-day" size={24} />
            </div>
            <p className="d-flex justify-content-between text-white text-center mb-0">
                <span className='temperature-max'>
                    19°  
                </span>
                <span className='temperature-min opacity-50'>
                    13°
                </span>
            </p>
        </div>
    );
};

export default WeatherForecastDay;