import { AppActionTypes } from "./app/types";
import { rootReducer } from "./configureStore";
import { ThunkAction } from "redux-thunk";
import { SwitcherActionTypes } from "./switcher/types";
import { WeatherActionTypes } from "./weather/types";
import { TimeActionTypes } from "./time/types";

export type RootState = ReturnType<typeof rootReducer>;

export type RootActionTypes =
  | AppActionTypes
  | SwitcherActionTypes
  | WeatherActionTypes
  | TimeActionTypes;

export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootActionTypes
>;
