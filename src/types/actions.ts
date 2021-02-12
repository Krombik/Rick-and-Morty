import { CommonActions } from "redux/common/type";
import { RehydrateAction } from "redux-persist";
import { AlertActions } from "redux/alert/type";
import { WatchListActions } from "redux/watchList/type";
import { ModalActions } from "redux/modal/type";

export type Actions =
  | CommonActions
  | AlertActions
  | RehydrateAction
  | WatchListActions
  | ModalActions;
