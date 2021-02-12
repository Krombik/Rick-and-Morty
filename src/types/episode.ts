import { PaginatedData } from "types";
import { RouterQueryParams } from "./router";

export type EpisodeQueryParams = {
  [RouterQueryParams.NAME]: string;
  [RouterQueryParams.EPISODE]: string;
};

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export type Episodes = PaginatedData<Episode>;
