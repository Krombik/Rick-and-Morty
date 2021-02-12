import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commonReducer from "./common/reducer";
import alertReducer from "./alert/reducer";
import watchListReducer from "./watchList/reducer";
import modalReducer from "./modal/reducer";
import { combineReducers } from "redux";

const commonConfig: PersistConfig<any> = {
  key: "common",
  storage: storage,
  whitelist: ["dark", "token", "offset"],
};

export const combinedReducer = combineReducers({
  common: persistReducer(commonConfig, commonReducer),
  alert: alertReducer,
  watchList: watchListReducer,
  modal: modalReducer,
});
