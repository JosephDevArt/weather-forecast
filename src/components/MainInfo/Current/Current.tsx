import React, { FC } from "react";

const Current: FC<any> = () => {
  return (
    <div className="current">
      <h1>city, country</h1>
      <p>tyme day , date month year</p>
      <img src={`http://openweathermap.org/img/wn/icon@4x.png`} alt="" />
      <h2>description</h2>
      <h3>
        temp<span> "℃"</span>
      </h3>
    </div>
  );
};

export default Current;
