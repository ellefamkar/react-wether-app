import React, { useState} from 'react';
// import FormattedDate from "./FormattedDate";
import WeatherForecastDay from './WeatherForecastDay';
import axios from "axios";

const WeatherForecast = ({coordinates}) => {
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast]=useState(null);

    const handleResponse = (response) =>{
        setLoaded(true);
        setForecast(response.data.daily);
    };

    if(loaded){
        return (
            <div className="container">
                <div className='row mt-2'>
                    <WeatherForecastDay data={forecast[0]} />
                </div>
            </div>
        );
    }else{
        const apiKey = 'f0bata7385ff184aeb7o2efc0a37f732';
        let units = "metric";
        let latitude = coordinates.latitude;
        let longitude = coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
};

export default WeatherForecast;