import { ModalState } from "./reducer";

export enum ActionTypes {
  SET_MODAL = "SET_MODAL",
}

type SetDark = {
  type: ActionTypes.SET_MODAL;
  payload: Partial<ModalState>;
};

export type ModalActions = SetDark;
