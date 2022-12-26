import React, { useState } from "react";
import axios from "axios";
import { ThreeCircles } from 'react-loader-spinner';
import ReactAnimatedWeather from 'react-animated-weather'; 

const Weather = ({city}) =>{
    const [temperature, setTemperature] = useState(null);

    const cityData = (resonse) =>{
        setTemperature(resonse.data.main.temp);
    }

    // const defaults = {
    //     icon: 'CLEAR_DAY',
    //     color: 'goldenrod',
    //     size: 512,
    //     animate: true
    //   };

    let apiKey = '3df2faaa654dfbe28b4e2b8d1ff69774';
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(cityData);
  

//     <ReactAnimatedWeather
//     icon={defaults.icon}
//     color={defaults.color}
//     size={defaults.size}
//     animate={defaults.animate}
//   />

    return(
    <h2> 
    {temperature
    ? `The Weather in ${city} is ${temperature} `
  
    : <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
      
    }
    </h2>
    );
};

export default Weather;