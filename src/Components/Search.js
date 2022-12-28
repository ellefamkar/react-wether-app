import React, {useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Weather from "./Weather";
import "./Search.css";

const Search = ({defaultCity}) => {
    let[city, setCity] = useState(defaultCity);
    let[weather, setWeather] = useState({loaded:false});

    const handleResponse = (response) => {
        setWeather({
            loaded:true,
            name: response.data.city,
            temperature: response.data.temperature.current,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            speed: response.data.wind.speed,
            icon: response.data.condition.icon,
        });
    };

    const search = () =>{
        const apiKey = 'f0bata7385ff184aeb7o2efc0a37f732';
        let units = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        search();
    };

    const handleCitySearch = (event) =>{
        setCity(event.target.value);
    }
    
    let form = (
        <form className="search-form row border" onSubmit={handleSubmit}>
            <div className="col-10 pe-0">
                <input type="search" className="border-0 pe-0 rounded w-100 bg-transparent text-white" onChange={handleCitySearch} placeholder="Type your city name here"/>
            </div>
            <div className="col-2">
                <button type="submit" className="border-0 rounded w-100 bg-transparent">
                    <FontAwesomeIcon icon={faSearch} className="text-white" />
                </button>
            </div>
        </form>
    );

    if(weather.loaded){
        return (
            <>
                {form}
                <Weather weather={weather} />
            </>
        );
    }else{
        search();
        return "Loading";
    }
};

export default Search;