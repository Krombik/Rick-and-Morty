import { PaginatedData } from "types";
import { RouterQueryParams } from "./router";

export type LocationQueryParams = {
  [RouterQueryParams.NAME]: string;
  [RouterQueryParams.TYPE]: string;
  [RouterQueryParams.DIMENSION]: string;
};

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export type Locations = PaginatedData<Location>;
