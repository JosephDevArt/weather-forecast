import {
  WeatherActionTypes,
  LOAD_WEATHER_SUCCESS,
  WeatherPayload,
} from "./types";

import { AppThunk } from "../rootTypes";
import {
  setIsFetching,
  setIsGeolocationProvided,
  setIsInitialized,
} from "../app/actions";
import { setErrorMessage } from "./../app/actions";
import { batch } from "react-redux";

//loadWeatherSuccess action is being listened by 3 reduers (weatherRed,timeRed,locationRed)
export const loadWeatherSuccess = (
  payload: WeatherPayload
): WeatherActionTypes => ({
  type: LOAD_WEATHER_SUCCESS,
  payload,
});

export const getWeather = (...args: any): AppThunk<any> => async (
  dispatch,
  getState
) => {
  const isChecked = getState().units.isChecked; //make and api call with fahrenheit if isChecked==true and with celsius if isChecked==false
  const errorMessage = getState().app.errorMessage;
  const isGeoProvided = getState().app.isGeoProvided;
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  dispatch(setIsFetching(true));

  let response: any;

  if (args.length == 1) {
    var city = args[0];
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=${
        isChecked ? "imperial" : "metric"
      }`
    );
  } else {
    const lat = args[0];
    const lon = args[1];
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=${
        isChecked ? "imperial" : "metric"
      }`
    );
  }
  if (response.ok) {
    var data = await response.json();
    const payload: WeatherPayload = {
      city: data.city,
      weather: data.list,
    };
    batch(() => {
      !isGeoProvided && dispatch(setIsGeolocationProvided(true));
      dispatch(loadWeatherSuccess(payload));
      dispatch(setIsFetching(false));
      errorMessage && dispatch(setErrorMessage(""));
    });
  } else {
    batch(() => {
      dispatch(setIsFetching(false));
      dispatch(setErrorMessage(response.statusText));
    });
    throw Error;
  }

  const { lat, lon }: { lat: number; lon: number } = data.city.coord; //latitude longitude
  return [lat, lon];
};
