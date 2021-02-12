import { ActionTypes, AlertActions } from "./type";

type State = {
  show: boolean;
  text: string | number;
};

const initialState: State = {
  show: false,
  text: "",
};

export default function reducer(
  state = initialState,
  action: AlertActions
): State {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
