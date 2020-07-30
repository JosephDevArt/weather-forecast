import { TimeState, LOAD_TIME_SUCCESS, TimeActionTypes } from "./types";
import { LOAD_WEATHER_SUCCESS, WeatherActionTypes } from "./../weather/types";
import { convertMilisecToTime } from "./../helperFunctions";

const initialState: TimeState = {
  day: "",
  month: "",
  date: "",
  year: "",
  time: "",
  sunrise: "",
  sunset: "",
};

const timeReducer = (
  state = initialState,
  action: TimeActionTypes | WeatherActionTypes
): TimeState => {
  switch (action.type) {
    case LOAD_TIME_SUCCESS: {
      const day = new Date(action.time.replace(/ /g, "T")); //replace function makes it work in safari browser
      const dateArray = day.toDateString().split(" ");
      const time = action.time.slice(11, 16); //extract hh:mm only

      return {
        ...state,
        day: dateArray[0],
        month: dateArray[1],
        date: dateArray[2],
        year: dateArray[3],
        time: time,
      };
    }
    case LOAD_WEATHER_SUCCESS: {
      const sunriseTime = convertMilisecToTime(action.payload.city.sunrise);
      const sunsetTime = convertMilisecToTime(action.payload.city.sunset);
      return {
        ...state,
        sunrise: sunriseTime,
        sunset: sunsetTime,
      };
    }
    default: {
      return state;
    }
  }
};

export default timeReducer;
