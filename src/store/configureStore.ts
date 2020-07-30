import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import appReducer from "./app/reducers";
import weatherReducer from "./weather/reducers";
import timeReducer from "./time/reducers";
import switcherReducer from "./switcher/reducers";
import locationReducer from "./location/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  location: locationReducer,
  weather: weatherReducer,
  time: timeReducer,
  units: switcherReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware)
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    //   (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
