import React, { FC } from "react";

const UnitsSwitcher: FC<any> = () => {
  return (
    <div className="temp-units">
      <p>Weather forecast</p>
      <div className="toggle">
        <input type="checkbox" />
        <label htmlFor="">℃</label>
        <label htmlFor="">℉</label>
      </div>
    </div>
  );
};

export default UnitsSwitcher;
