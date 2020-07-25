import {
  SET_IS_INITIALISED,
  SET_IS_FETCHING,
  SET_ERROR_MESSAGE,
  AppActionTypes,
} from "./types";

export const setIsInitialized = (): AppActionTypes => ({
  type: SET_IS_INITIALISED,
});

export const setIsFetching = (payload: boolean): AppActionTypes => ({
  type: SET_IS_FETCHING,
  payload,
});

export const setErrorMessage = (error: string): AppActionTypes => ({
  type: SET_ERROR_MESSAGE,
  error,
});
