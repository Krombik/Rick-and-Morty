import APIPaths from "api/apiAddresses";
import { Tab } from "types/tab";

export const MY_WATCH_LIST = "my-watch-list";

export const tabs: Tab[] = [
  { text: "Characters", path: APIPaths.CHARACTER },
  { text: "Locations", path: APIPaths.LOCATION },
  { text: "Episodes", path: APIPaths.EPISODE },
  { text: "My watch list", path: MY_WATCH_LIST },
];
