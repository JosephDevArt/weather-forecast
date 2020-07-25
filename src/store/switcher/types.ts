export const SET_IS_CHECKED = "SET_IS_CHECKED";

export type SwitcherState = {
  isChecked: boolean;
};

type SetIsChecked = {
  type: typeof SET_IS_CHECKED;
};

export type SwitcherActionTypes = SetIsChecked;
