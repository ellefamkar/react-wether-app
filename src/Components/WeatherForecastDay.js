import React from 'react';
import WeatherIcon from "./WeatherIcon";
import ForecastTemperature from './ForecastTemperature';

const WeatherForecastDay = ({data}) => {
    function day() {
        let date = new Date(data.time * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }

    return (
        <>
            <p className='mb-2 text-white'>{day()}</p>
            <div className="text-center mb-0">
                <WeatherIcon code={data.condition.icon} size={24} />
            </div>
            <ForecastTemperature temperature={data.temperature} />
        </>
    );
};

export default WeatherForecastDay;