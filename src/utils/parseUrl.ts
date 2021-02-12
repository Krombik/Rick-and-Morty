import { matchPath } from "react-router-dom";
import { BASE_URL } from "./constant";

const parseUrl = (url: string) =>
  matchPath<{ path: string; id: string }>(url, {
    path: `${BASE_URL}/:path/:id`,
  })?.params;

export default parseUrl;
