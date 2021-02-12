export enum ActionTypes {
  ADD_TO_WATCH = "ADD_TO_WATCH",
  REMOVE_FROM_WATCH_LIST = "REMOVE_FROM_WATCH_LIST",
  REVERSE_WATCHED_STATUS = "REVERSE_WATCHED_STATUS",
  SET_WATCH_LIST = "SET_WATCH_LIST",
}

export type ToWatch = { id: number; viewed: boolean };

type SetWatchList = {
  type: ActionTypes.SET_WATCH_LIST;
  payload: ToWatch[];
};

type AddToWatch = {
  type: ActionTypes.ADD_TO_WATCH;
  payload: number;
};

type SetWatchedStatus = {
  type: ActionTypes.REVERSE_WATCHED_STATUS;
  payload: number;
};

type RemoveFromWatch = {
  type: ActionTypes.REMOVE_FROM_WATCH_LIST;
  payload: number;
};

export type WatchListActions =
  | AddToWatch
  | SetWatchedStatus
  | RemoveFromWatch
  | SetWatchList;
