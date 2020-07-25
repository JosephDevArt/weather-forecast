import React, { FC } from "react";

type Props = {
  temp: number;
  time: string;
  icon: string;
  isChecked: boolean;
};

const TimeStamp: FC<Props> = ({ time, temp, icon, isChecked }) => {
  return (
    <div className="time-stamp">
      <div className="temp-at-specific-hour">
        <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
        <p>
          {temp}
          {isChecked ? "℉" : "℃"}
        </p>
      </div>
      <span>{time}</span>
    </div>
  );
};

export default TimeStamp;
