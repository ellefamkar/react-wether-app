import React from 'react';
import WeatherIcon from "./WeatherIcon";
import ForecastTemperature from './ForecastTemperature';

const WeatherForecastDay = ({data}) => {
    console.log(data);
    return (
        <div className='forecast-details col-2'>
            <p className='mb-2 text-white'>{data.time}</p>
            <div className="text-center mb-1">
                <WeatherIcon code="clear-sky-day" size={24} />
            </div>
            <ForecastTemperature temperature={data.temperature} />
        </div>
    );
};

export default WeatherForecastDay;