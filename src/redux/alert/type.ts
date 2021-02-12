export enum ActionTypes {
  SET_ALERT = "SET_ALERT",
}

export type SetAlertPayloadType = {
  show: boolean;
  text?: string;
};

type SetAlert = {
  type: ActionTypes.SET_ALERT;
  payload: SetAlertPayloadType;
};

export type AlertActions = SetAlert;
