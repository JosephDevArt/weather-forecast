import {
  SET_IS_INITIALISED,
  SET_IS_FETCHING,
  SET_ERROR_MESSAGE,
  AppActionTypes,
  SET_IS_GEOLOCATION_PROVIDED,
} from "./types";
import { AppThunk } from "../rootTypes";

import { getWeather } from "../weather/actions";
import { getTime } from "../time/actions";

export const setIsInitialized = (payload: boolean): AppActionTypes => ({
  type: SET_IS_INITIALISED,
  payload,
});

export const setIsFetching = (payload: boolean): AppActionTypes => ({
  type: SET_IS_FETCHING,
  payload,
});

export const setErrorMessage = (error: string): AppActionTypes => ({
  type: SET_ERROR_MESSAGE,
  error,
});

export const setIsGeolocationProvided = (payload: boolean): AppActionTypes => ({
  type: SET_IS_GEOLOCATION_PROVIDED,
  payload,
});

export const getWeatherAndTime = (city: string): AppThunk<void> => async (
  dispatch
) => {
  const coord: number[] = await dispatch(getWeather(city));
  await dispatch(getTime(coord[0], coord[1])); //[latitude,longitude]
};

export const initializeApp = (): AppThunk<void> => async (dispatch) => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      dispatch(setIsGeolocationProvided(true));
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const weather = dispatch(getWeather(lat, lon));
      const time = dispatch(getTime(lat, lon));

      Promise.all([weather, time]).then(() => {
        dispatch(setIsInitialized(true));
      });
    },
    function (fail) {
      dispatch(setIsGeolocationProvided(false));
    }
  );
};
