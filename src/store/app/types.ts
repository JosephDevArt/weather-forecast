export const SET_IS_INITIALISED = "SET_IS_INITIALIZED";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_IS_GEOLOCATION_PROVIDED = "SET_IS_GEOLOCATION_PROVIDED";

export type AppState = {
  isInitialized: boolean;
  isFetching: boolean;
  errorMessage: string;
  isGeoProvided: boolean;
};

type SetIsInitialized = {
  type: typeof SET_IS_INITIALISED;
  payload: boolean;
};

type SetIsFetching = {
  type: typeof SET_IS_FETCHING;
  payload: boolean;
};

type SetErrorMessage = {
  type: typeof SET_ERROR_MESSAGE;
  error: string;
};

type SetIsGeolocationIsProvided = {
  type: typeof SET_IS_GEOLOCATION_PROVIDED;
  payload: boolean;
};

export type AppActionTypes =
  | SetIsInitialized
  | SetIsFetching
  | SetErrorMessage
  | SetIsGeolocationIsProvided;
