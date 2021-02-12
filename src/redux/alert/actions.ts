import { ThunkResult } from "types";
import { ActionTypes, SetAlertPayloadType } from "./type";
import { FetcherFailError } from "types/error";

export const setAlert = (
  show: boolean,
  data?: FetcherFailError
): ThunkResult => (dispatch) => {
  let payload: SetAlertPayloadType;
  if (show && data) {
    const { errorStatus, error } = data;

    payload = {
      show,
      text:
        error ||
        (errorStatus === 401
          ? "Unauthorized"
          : errorStatus === 403
          ? "Access denied"
          : errorStatus === 404
          ? "Not Found"
          : errorStatus === 500
          ? "Internal Server Error"
          : "Something going wrong"),
    };
  } else {
    payload = { show };
  }

  dispatch({
    type: ActionTypes.SET_ALERT,
    payload,
  });
};
