import {
  SET_IS_INITIALISED,
  SET_IS_FETCHING,
  SET_ERROR_MESSAGE,
  AppActionTypes,
} from "./types";
import { AppThunk } from "../rootTypes";

import { getWeather } from "../weather/actions";
import { getTime } from "../time/actions";

export const setIsInitialized = (): AppActionTypes => ({
  type: SET_IS_INITIALISED,
});

export const setIsFetching = (payload: boolean): AppActionTypes => ({
  type: SET_IS_FETCHING,
  payload,
});

export const setErrorMessage = (error: string): AppActionTypes => ({
  type: SET_ERROR_MESSAGE,
  error,
});

export const getWeatherAndTime = (city: string): AppThunk<void> => async (
  dispatch
) => {
  const coord: number[] = await dispatch(getWeather(city));
  await dispatch(getTime(coord[0], coord[1])); //[latitude,longitude]
};

export const initializeApp = () => async (dispatch: any) => {
  //detect current location to recognize city name and then get weather and time for the city
  const response = await fetch("http://ip-api.com/json");
  const data = await response.json();

  await dispatch(getWeatherAndTime(data.city));
  await dispatch(setIsInitialized());
};
