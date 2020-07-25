import { WeatherActionTypes, LOAD_WEATHER_SUCCESS } from "../weather/types";
import { LocationState } from "./types";

const initialState: LocationState = {
  country: "",
  city: "",
};

const locationReducer = (
  state = initialState,
  action: WeatherActionTypes
): LocationState => {
  switch (action.type) {
    case LOAD_WEATHER_SUCCESS: {
      const { name: city, country } = action.payload.city;
      return {
        country: country,
        city: city,
      };
    }
    default: {
      return state;
    }
  }
};

export default locationReducer;
