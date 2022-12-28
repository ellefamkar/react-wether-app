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
                <div className="weather-details position-relative mt-4">
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