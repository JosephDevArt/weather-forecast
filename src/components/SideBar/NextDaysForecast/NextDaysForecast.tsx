import React from "react";

import { useSelector, shallowEqual } from "react-redux";

import NextDay from "./NextDay/NextDay";
import { RootState } from "../../../store/rootTypes";

const NextDaysForecast = () => {
  const { nextDays, isChecked } = useSelector(
    (state: RootState) => ({
      nextDays: state.weather.nextDays,
      isChecked: state.units.isChecked,
    }),
    shallowEqual
  );

  return (
    <div className="next-days-forecast">
      <h4>Next days</h4>
      <ul>
        {nextDays.map((item, index) => (
          <NextDay key={index} isChecked={isChecked} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default NextDaysForecast;
