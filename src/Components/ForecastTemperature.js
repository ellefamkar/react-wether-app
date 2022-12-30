import React from 'react';

const ForecastTemperature = ({temperature}) => {
    const maxTemperature = () =>{
        let max = Math.round(temperature.maximum);
        return `${max}°`;
    };

    const minTemperature = () => {
        let min = Math.round(temperature.minimum);
        return `${min}°`;
    };

    return (
        <p className="d-flex justify-content-between text-white text-center mb-0">
        <span className='temperature-max'>
           {maxTemperature()} 
        </span>
        <span className='temperature-min opacity-50'>
            {minTemperature()}
        </span>
    </p>
    );
};

export default ForecastTemperature;