import React, { FC } from "react";

const TimeStamp: FC<any> = () => {
  return (
    <div className="time-stamp">
      <div className="temp-at-specific-hour">
        <img src={`http://openweathermap.org/img/wn/icon@4x.png`} alt="" />
        <p>temp "℃"</p>
      </div>
      <span>time</span>
    </div>
  );
};

export default TimeStamp;
