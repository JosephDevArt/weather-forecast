import React, { useRef, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeatherAndTime } from "./../../../store/app/actions";
import { RootState } from "../../../store/rootTypes";

const Form: FC<any> = () => {
  const input = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const { isFetching, errorMessage, isGeoProvided } = useSelector(
    (state: RootState) => ({
      isFetching: state.app.isFetching,
      errorMessage: state.app.errorMessage,
      isGeoProvided: state.app.isGeoProvided,
    })
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const node = input.current;

    dispatch(getWeatherAndTime(node?.value as string));
  };

  return (
    <form
      className={isGeoProvided ? "" : "geo-not-provided"}
      onSubmit={handleSubmit}
      action=""
    >
      <input ref={input} type="text" placeholder="city" />
      <p>{errorMessage}</p>
      <button disabled={isFetching} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
