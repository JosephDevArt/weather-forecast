import React from "react";

import NextDay from "./NextDay/NextDay";

const NextDaysForecast = () => {
  return (
    <div className="next-days-forecast">
      <h4>Next days</h4>
      <ul>
        <NextDay />
      </ul>
    </div>
  );
};

export default NextDaysForecast;
