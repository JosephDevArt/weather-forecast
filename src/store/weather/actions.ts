import {
  WeatherActionTypes,
  LOAD_WEATHER_SUCCESS,
  WeatherPayload,
} from "./types";

import { AppThunk } from "../rootTypes";
import { setIsFetching } from "../app/actions";
import { setErrorMessage } from "./../app/actions";
import { batch } from "react-redux";

//loadWeatherSuccess action is being listened by 3 reduers (weatherRed,timeRed,locationRed)
export const loadWeatherSuccess = (
  payload: WeatherPayload
): WeatherActionTypes => ({
  type: LOAD_WEATHER_SUCCESS,
  payload,
});

export const getWeather = (city: string): AppThunk<Promise<number[]>> => async (
  dispatch,
  getState
) => {
  console.log(document.documentElement.clientHeight);
  const isChecked = getState().units.isChecked; //make and api call with fahrenheit if isChecked==true and with celsius if isChecked==false
  const errorMessage = getState().app.errorMessage;
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  dispatch(setIsFetching(true));
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=${
      isChecked ? "imperial" : "metric"
    }`
  );
  if (response.ok) {
    var data = await response.json();
    const payload: WeatherPayload = {
      city: data.city,
      weather: data.list,
    };
    batch(() => {
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
