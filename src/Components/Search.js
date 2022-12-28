import React, {useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Search.css";

const Search = () => {
    let[city, setCity] = useState("Sydney");
    let[loaded,setLoaded] = useState(false)
    let[weather, setWeather] = useState();

    const handleResponse = (response) => {
        setLoaded(true);
        setWeather({
            name: response.data.city,
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            speed: response.data.wind.speed,
            icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        });
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        let apiKey = 'f0bata7385ff184aeb7o2efc0a37f732';
        let units = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
    };

    const searchResult = (event) =>{
        setCity(event.target.value);
    }
    
    let form = (
        <form className="search-form row border" onSubmit={submitHandler}>
            <div className="col-10 pe-0">
                <input type="search" className="border-0 pe-0 rounded w-100 bg-transparent text-white" onChange={searchResult} placeholder="Type your city name here"/>
            </div>
            <div className="col-2">
                <button type="submit" className="border-0 rounded w-100 bg-transparent">
                    <FontAwesomeIcon icon={faSearch} className="text-white" />
                </button>
            </div>
        </form>
    );

    if(loaded){
        return (
            <>
                {form}
                <div className="weather-details mt-4">
                    <h1 className="weather-name text-white position-absolute">{weather.name}</h1>
                    <div className="weather-icon text-center">
                        <img src={weather.icon}  alt={weather.description}/>
                    </div>
                    <h2 className="weather-temperature text-white text-center mb-0">{weather.temperature}℃</h2>
                    <ul className="weather-description text-white p-0">
                        <li>{weather.description} 7:20 Pm</li>
                        <li>Humidity: {weather.humidity}</li>
                    </ul>
                </div>
            </>
        );
    }else{
    
        return (
           <>
            {form}
            
           </>
        );
    }
};

export default Search;