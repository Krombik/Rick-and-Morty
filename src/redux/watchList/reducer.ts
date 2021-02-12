import { ActionTypes, ToWatch, WatchListActions } from "./type";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

type State = {
  list: ToWatch[];
};

const initialState: State = {
  list: [],
};

const config: PersistConfig<any> = {
  key: "search",
  storage: storage,
  whitelist: ["list"],
};

export default persistReducer<State, WatchListActions>(
  config,
  (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.ADD_TO_WATCH:
        return {
          ...state,
          list: [...state.list, { id: action.payload, viewed: false }],
        };
      case ActionTypes.SET_WATCH_LIST:
        return {
          ...state,
          list: action.payload,
        };
      case ActionTypes.REMOVE_FROM_WATCH_LIST:
        return {
          ...state,
          list: [
            ...state.list.slice(0, action.payload),
            ...state.list.slice(action.payload + 1),
          ],
        };
      case ActionTypes.REVERSE_WATCHED_STATUS:
        return {
          ...state,
          list: [
            ...state.list.slice(0, action.payload),
            {
              ...state.list[action.payload],
              viewed: !state.list[action.payload].viewed,
            },
            ...state.list.slice(action.payload + 1),
          ],
        };
      default:
        return state;
    }
  }
);
