import React from 'react';
// import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";

const WeatherForecast = ({name}) => {
    // let[city, setCity]=useState(name);

    
        const handleResponse = (response) =>{
            console.log(response.data)
        };

    const apiKey = 'f0bata7385ff184aeb7o2efc0a37f732';
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${name}&key=${apiKey}&units=${units}`;
    // https://api.shecodes.io/weather/v1/forecast?lon={lon}&lat={lat}&key={key}
    axios.get(apiUrl).then(handleResponse);


    return (
        <div className="container">
            <div className='row'>
                <div className='forecast-details col-1 mt-4'>
                    {/* <FormattedDate date="Feb" /> */}
                    <div className="weather-icon text-center">
                        <WeatherIcon code="clear-sky-day" />
                    </div>
                    <h2 className="d-flex text-white text-center mb-0">
                        <WeatherTemperature celsius={10} />
                        <WeatherTemperature celsius={2} />
                    </h2>
                    <ul className="text-white p-0">
                        <li>"Cloudy"</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default WeatherForecast;