import React, { FC } from "react";
import { useSelector, shallowEqual } from "react-redux";

import TimeStamp from "./TimeStamp/TimeStamp";
import { RootState } from "../../../store/rootTypes";

const TimeLine: FC<any> = () => {
  const { timeLine, isChecked } = useSelector(
    (state: RootState) => ({
      timeLine: state.weather.timeLine,
      isChecked: state.units.isChecked,
    }),
    shallowEqual
  );

  return (
    <div className="cont">
      <div className="time-line">
        {timeLine.map((item, index) => (
          <TimeStamp key={index} isChecked={isChecked} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
