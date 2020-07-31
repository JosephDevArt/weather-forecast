export const LOAD_TIME_SUCCESS = "LOAD_TIME_SUCCESS";

export type TimeState = {
  day: string;
  month: string;
  date: string;
  year: string;
  time: string;
  sunrise: string;
  sunset: string;
};

type LoadTimeSuccessAction = {
  type: typeof LOAD_TIME_SUCCESS;
  time: string;
};

export type TimeActionTypes = LoadTimeSuccessAction;
