import React from 'react';
// import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

const WeatherForecast = ({coordinates}) => {
    // let[city, setCity]=useState(name);

    const handleResponse = (response) =>{
        console.log(response.data)
    };

    const apiKey = 'f0bata7385ff184aeb7o2efc0a37f732';
    let units = "metric";
    let latitude = coordinates.latitude;
    let longitude = coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);


    return (
        <div className="container">
            <div className='row mt-2'>
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
                
            </div>
        </div>
    );
};

export default WeatherForecast;