import React, {useState} from "react";
import axios from "axios";
import "./Search.css";
import ReactAnimatedWeather from 'react-animated-weather'; 

// import Weather from "./Weather";
// import styled from 'styled-component';
// const MyContainer = styled.div`
// width: 100%;
// background-color: #000000;
// `
// const Search = () => {

//     let[city, setCity] = useState("");
//     let[message, setMessage] = useState("");

//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         setMessage(city);
//     }
//     const handleChange = (event)=>{
//         setCity(event.target.value);
//     }

//     return(
//         <>
//          <form onSubmit={handleSubmit}>
//             <input type="search" onChange={handleChange}/>
//             <input type="submit" />
//          </form>
//          {/* <h2>{message}</h2> */}
//          <Weather city={message} />

//         </>
//     )
// }

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
        <form className="search-form" onSubmit={submitHandler}>
            <input type="search" onChange={searchResult} placeholder="Type your city name here"/>
            <button type="submit">Search</button>
        </form>
    );

    const defaults = {
        icon: 'CLEAR_DAY',
        color: 'goldenrod',
        size: 112,
        animate: true
      };

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
            <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
            />
           </>
        );
    }
};

export default Search;