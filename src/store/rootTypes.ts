import { AppActionTypes } from "./app/types";
import { rootReducer } from "./configureStore";
import { ThunkAction } from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;

export type RootActionTypes = AppActionTypes;

export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootActionTypes
>;
