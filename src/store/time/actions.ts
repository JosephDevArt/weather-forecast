import { TimeActionTypes, LOAD_TIME_SUCCESS } from "./types";

import { AppThunk } from "../rootTypes";
import { setIsFetching, setIsInitialized } from "../app/actions";

export const loadTimeSuccess = (time: string): TimeActionTypes => ({
  type: LOAD_TIME_SUCCESS,
  time,
});

export const getTime = (lat: number, lng: number): AppThunk<void> => async (
  dispatch,
  getState
) => {
  const isInitialized = getState().app.isInitialized;

  dispatch(setIsFetching(true));
  const api_key = process.env.REACT_APP_TIME_API_KEY;
  const response = await fetch(
    `https://api.timezonedb.com/v2.1/get-time-zone?key=${api_key}&format=json&by=position&lat=${lat}&lng=${lng}`
  );
  const data = await response.json();

  dispatch(loadTimeSuccess(data.formatted));
  dispatch(setIsFetching(false));

  !isInitialized && dispatch(setIsInitialized(true));
};