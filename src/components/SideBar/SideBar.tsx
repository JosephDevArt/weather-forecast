import React, { FC } from "react";

import WeatherDetails from "./WeatherDetails/WeatherDetails";
import NextDaysForecast from "./NextDaysForecast/NextDaysForecast";

const SideBar: FC<any> = () => {
  return (
    <aside className="side-bar">
      <WeatherDetails />
      <NextDaysForecast />
    </aside>
  );
};

export default SideBar;
