import React, { FC } from "react";

import Current from "./Current/Current";
import Form from "./Form/Form";
import TimeLine from "./TimeLine/TimeLine";

const MainInfo: FC<any> = () => {
  return (
    <div className="main-info">
      <Form />
      <Current />
      <TimeLine />
    </div>
  );
};

export default MainInfo;
