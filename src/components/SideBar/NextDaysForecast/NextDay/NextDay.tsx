import React, { FC } from "react";

type Props = {
  day: string;
  temp: number;
  isChecked: boolean;
};

const NextDay: FC<Props> = ({ day, temp, isChecked }) => {
  return (
    <li>
      {day}
      <span>
        {temp} {isChecked ? "℉" : "℃"}
      </span>
    </li>
  );
};

export default NextDay;
