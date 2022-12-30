import React, { useState} from 'react';
// import FormattedDate from "./FormattedDate";
import axios from "axios";
import WeatherForecastDay from './WeatherForecastDay';

const WeatherForecast = ({coordinates}) => {
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast]=useState(null);

    const handleResponse = (response) =>{
        setForecast(response.data.daily);
        setLoaded(true);
    };

    if(loaded){
        return (
            <div className="container">
                <div className='row mt-2'>
                    {
                        forecast.map((dailyForecast, index)=>{
                            if( index < 6 ){
                                return <div className='forecast-details col-2' key={index}>
                                 <WeatherForecastDay data={dailyForecast} />
                                </div>
                            }
                        })
                    }
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