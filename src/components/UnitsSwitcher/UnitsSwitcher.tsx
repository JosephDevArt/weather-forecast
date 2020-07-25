import React, { FC } from "react";
import { useSelector, batch } from "react-redux";
import { useDispatch } from "react-redux";

import { setIsChecked } from "./../../store/switcher/actions";
import { getWeather } from "../../store/weather/actions";
import { RootState } from "../../store/rootTypes";

const UnitsSwitcher: FC<any> = () => {
  const dispatch = useDispatch();

  const city = useSelector((state: RootState) => state.location.city);

  const toggleCheck = () => {
    batch(() => {
      dispatch(setIsChecked());
      dispatch(getWeather(city));
    });
  };

  return (
    <div className="temp-units">
      <p>Weather forecast</p>
      <div className="toggle">
        <input onChange={toggleCheck} type="checkbox" />
        <label htmlFor="">℃</label>
        <label htmlFor="">℉</label>
      </div>
    </div>
  );
};

export default UnitsSwitcher;
