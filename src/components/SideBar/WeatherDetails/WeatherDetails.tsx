import React, { FC } from "react";

import WeatherDetail from "./WeatherDetail/WeatherDetail";

const WeatherDetails: FC<any> = () => {
  return (
    <div className="weather-details">
      <h4>Weather details</h4>
      <ul>
        <WeatherDetail />
      </ul>
    </div>
  );
};

export default WeatherDetails;
