import {
  SET_IS_INITIALISED,
  AppActionTypes,
  AppState,
  SET_IS_FETCHING,
  SET_ERROR_MESSAGE,
} from "./types";

const initialState: AppState = {
  isInitialized: false,
  isFetching: false,
  errorMessage: "",
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
    default:
      return state;
  }
};

export default appReducer;
