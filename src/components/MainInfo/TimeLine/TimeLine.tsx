import React, { FC } from "react";

import TimeStamp from "./TimeStamp/TimeStamp";

const TimeLine: FC<any> = () => {
  return (
    <div className="cont">
      <div className="time-line">
        <TimeStamp />
        <TimeStamp />
        <TimeStamp />
        <TimeStamp />
        <TimeStamp />
        <TimeStamp />
        <TimeStamp />
        <TimeStamp />
        <TimeStamp />
      </div>
    </div>
  );
};

export default TimeLine;
