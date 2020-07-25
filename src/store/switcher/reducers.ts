import { SwitcherState, SwitcherActionTypes, SET_IS_CHECKED } from "./types";

const initialState: SwitcherState = {
  isChecked: false,
};

const switcherReducer = (
  state = initialState,
  action: SwitcherActionTypes
): SwitcherState => {
  switch (action.type) {
    case SET_IS_CHECKED: {
      return {
        isChecked: !state.isChecked,
      };
    }
    default: {
      return state;
    }
  }
};

export default switcherReducer;
