import React, {useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Search.css";

const Search = () => {
    let[city, setCity] = useState("shiraz");
    let[loaded, setLoaded] = useState(false);
    let[weather, setWeather] = useState({});

    const displayWeather = (response) => {
        setLoaded(true);
        setWeather({
            name: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            speed: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    
        })
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        let apiKey = '3df2faaa654dfbe28b4e2b8d1ff69774';
        let units = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(displayWeather);
    };

    const searchResult = (event) =>{
        setCity(event.target.value);
    }
    
    let form = (
        <form className="search-form row border" onSubmit={submitHandler}>
            <div className="col-10">
                <input type="search" className="border-0 rounded w-100 bg-transparent text-white" onChange={searchResult} placeholder="Type your city name here"/>
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
                <div className="search-container">
                    <h3>{weather.name}</h3>
                    <ul>
                        <li>{weather.temperature}</li>
                        <li>{weather.description}</li>
                        <li>{weather.humidity}</li>
                        <li>{weather.speed}</li>
                        <li><img src={weather.icon}  alt={weather.description}/></li>
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