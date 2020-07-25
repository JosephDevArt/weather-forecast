import React, { FC } from "react";
import { useSelector, shallowEqual } from "react-redux";

import WeatherDetail from "./WeatherDetail/WeatherDetail";
import { RootState } from "../../../store/rootTypes";

const WeatherDetails: FC<any> = () => {
  type WeatherDetails = {
    humidity: number;
    pressure: number;
    ["sea level"]: number;
    ["wind speed"]: number;
    sunrise: string;
    sunset: string;
    [propName: string]: any;
  };

  const weatherDetails: WeatherDetails = useSelector(
    (state: RootState) => ({
      humidity: state.weather.currentWeather.main.humidity,
      pressure: state.weather.currentWeather.main.pressure,
      ["sea level"]: state.weather.currentWeather.main.sea_level,
      ["wind speed"]: state.weather.currentWeather.wind.speed,
      sunrise: state.time.sunrise,
      sunset: state.time.sunset,
    }),
    shallowEqual
  );

  return (
    <div className="weather-details">
      <h4>Weather details</h4>
      <ul>
        {Object.keys(weatherDetails).map((item, index) => (
          <WeatherDetail key={index} text={item} value={weatherDetails[item]} />
        ))}
      </ul>
    </div>
  );
};

export default WeatherDetails;
