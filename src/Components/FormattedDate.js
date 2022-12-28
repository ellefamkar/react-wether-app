import React from "react";

const FormattedDate = ({date})=>{
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];
    let hours = date.getHours();
    hours = hours < 10
    ? `0${hours}`
    : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 
    ? `0${minutes}`
    : minutes;
    return (
        <div>
            {day} {hours}:{minutes}
        </div>
    );
};

export default FormattedDate;