export const SET_IS_INITIALISED = "SET_IS_INITIALIZED";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export type AppState = {
  isInitialized: boolean;
  isFetching: boolean;
  errorMessage: string;
};

type SetIsInitialized = {
  type: typeof SET_IS_INITIALISED;
};

type SetIsFetching = {
  type: typeof SET_IS_FETCHING;
  payload: boolean;
};

type SetErrorMessage = {
  type: typeof SET_ERROR_MESSAGE;
  error: string;
};

export type AppActionTypes = SetIsInitialized | SetIsFetching | SetErrorMessage;
