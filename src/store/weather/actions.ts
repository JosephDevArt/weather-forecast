import { batch } from "react-redux";

import {
  WeatherActionTypes,
  LOAD_WEATHER_SUCCESS,
  WeatherPayload,
} from "./types";

import { AppThunk } from "../rootTypes";

import { setIsFetching, setIsGeolocationProvided } from "../app/actions";

import { setErrorMessage } from "./../app/actions";

//loadWeatherSuccess action is being listened by 3 reduers (weatherRed,timeRed,locationRed)
export const loadWeatherSuccess = (
  payload: WeatherPayload
): WeatherActionTypes => ({
  type: LOAD_WEATHER_SUCCESS,
  payload,
});

export const getWeather = (
  ...args: Array<number | string>
): AppThunk<Promise<number[]>> => async (dispatch, getState) => {
  const isChecked = getState().units.isChecked; //make and api call with fahrenheit if isChecked==true and with celsius if isChecked==false
  const errorMessage = getState().app.errorMessage;
  const isGeoProvided = getState().app.isGeoProvided;

  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  dispatch(setIsFetching(true));

  //----BELOW---- api call that depends on argument that was provided for getWeather(...args)
  let response: any;
  if (args.length == 1) {
    //if city was provided
    var city = args[0];
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=${
        isChecked ? "imperial" : "metric"
      }`
    );
  } else {
    //if coordinates were provided
    const lat = args[0];
    const lon = args[1];

    response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=${
        isChecked ? "imperial" : "metric"
      }`
    );
  }
  //----ABOVE---- api call that depends on argument that was provided for getWeather(...args)

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
