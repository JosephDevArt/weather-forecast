import React, { FC } from "react";

type Props = {
  text: string;
  value: string;
};

const WeatherDetail: FC<Props> = ({ text, value }) => {
  return (
    <li>
      {text}: <span>{value}</span>
    </li>
  );
};

export default WeatherDetail;
