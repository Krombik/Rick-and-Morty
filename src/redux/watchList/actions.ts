import { ThunkResult } from "types";
import { ActionTypes, ToWatch } from "./type";

export const addToWatchList = (id: number): ThunkResult => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_TO_WATCH,
    payload: id,
  });
};

export const setWatchList = (list: ToWatch[]): ThunkResult => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_WATCH_LIST,
    payload: list,
  });
};

export const removeFromWatchList = (index: number): ThunkResult => (
  dispatch
) => {
  dispatch({
    type: ActionTypes.REMOVE_FROM_WATCH_LIST,
    payload: index,
  });
};

export const reverseWatchStatus = (index: number): ThunkResult => (
  dispatch
) => {
  dispatch({
    type: ActionTypes.REVERSE_WATCHED_STATUS,
    payload: index,
  });
};
