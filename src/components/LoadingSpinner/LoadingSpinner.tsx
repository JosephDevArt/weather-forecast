import React, { FC } from "react";

type Props = {
  isFetching: boolean;
};

const LoadingSpinner: FC<Props> = ({ isFetching }) => {
  return (
    <div style={{ display: isFetching ? "" : "none" }} className="loading">
      <div>
        <div className="c1"></div>
        <div className="c2"></div>
        <div className="c3"></div>
        <div className="c4"></div>
      </div>
      <span>loading</span>
    </div>
  );
};

export default LoadingSpinner;
