import { ActionTypes, ModalActions } from "./type";

export type ModalState = {
  open: boolean;
  path: string | null;
  id: number | string | null;
};

const initialState: ModalState = {
  open: false,
  path: null,
  id: null,
};

export default function reducer(
  state = initialState,
  action: ModalActions
): ModalState {
  switch (action.type) {
    case ActionTypes.SET_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
