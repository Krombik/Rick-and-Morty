import { ThunkResult } from "types";
import { ModalState } from "./reducer";
import { ActionTypes } from "./type";

export const setModal = (modal: Partial<ModalState>): ThunkResult => (
  dispatch
) => {
  dispatch({
    type: ActionTypes.SET_MODAL,
    payload: modal,
  });
};
