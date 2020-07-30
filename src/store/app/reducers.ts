import {
  SET_IS_INITIALISED,
  AppActionTypes,
  AppState,
  SET_IS_FETCHING,
  SET_ERROR_MESSAGE,
  SET_IS_GEOLOCATION_PROVIDED,
} from "./types";

const initialState: AppState = {
  isInitialized: false,
  isFetching: false,
  errorMessage: "",
  isGeoProvided: false,
};

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_IS_INITIALISED:
      return {
        ...state,
        isInitialized: true,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
      };

    case SET_IS_GEOLOCATION_PROVIDED:
      return {
        ...state,
        isGeoProvided: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
