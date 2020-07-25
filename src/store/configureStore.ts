import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app/reducers";
import switcherReducer from "./switcher/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  units: switcherReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
