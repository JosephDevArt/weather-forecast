import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/rootTypes";

const Current: FC<any> = () => {
  const {
    city,
    country,
    day,
    month,
    date,
    year,
    time,
    temp,
    icon,
    description,
    isChecked,
  } = useSelector((state: RootState) => ({
    city: state.location.city,
    country: state.location.country,
    day: state.time.day,
    month: state.time.month,
    year: state.time.year,
    date: state.time.date,
    time: state.time.time,
    temp: Math.round(state.weather.currentWeather.main.temp),
    icon: state.weather.currentWeather.weather[0].icon,
    description: state.weather.currentWeather.weather[0].description,
    isChecked: state.units.isChecked,
  }));

  return (
    <div className="current">
      <h1>
        {city}, {country}
      </h1>
      <p>
        {time} {day}, {date} {month} {year}
      </p>
      <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
      <h2>{description}</h2>
      <h3>
        {temp} <span> {isChecked ? "℉" : "℃"}</span>
      </h3>
    </div>
  );
};

export default Current;
