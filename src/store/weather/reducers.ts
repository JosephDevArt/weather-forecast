import {
  createNextDaysWeather,
  createTimeLineWeather,
} from "./../helperFunctions";
import {
  WeatherState,
  LOAD_WEATHER_SUCCESS,
  WeatherActionTypes,
} from "./types";

const initialState: WeatherState = {
  currentWeather: {
    dt_txt: "",
    main: {
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
    },
    weather: [
      {
        description: "",
        icon: "",
        main: "",
      },
    ],
    wind: {
      speed: 0,
    },
  },
  timeLine: [],
  nextDays: [],
  isFetching: false,
};

const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case LOAD_WEATHER_SUCCESS:
      const timeLine = createTimeLineWeather(action.payload.weather);
      const nextDays = createNextDaysWeather(action.payload.weather);
      return {
        ...state,
        currentWeather: action.payload.weather[0],
        timeLine: timeLine,
        nextDays: nextDays,
      };
    default:
      return state;
  }
};

export default weatherReducer;
