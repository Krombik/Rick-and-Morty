import { PaginatedData } from "types";
import { RouterQueryParams } from "./router";

export enum CharacterStatus {
  ALIVE = "alive",
  DEAD = "dead",
  UNKNOWN = "unknown",
}

export enum CharacterGender {
  FEMALE = "female",
  MALE = "male",
  GENDERLESS = "Genderless",
  UNKNOWN = "unknown",
}

export type CharacterQueryParams = {
  [RouterQueryParams.STATUS]: CharacterStatus;
  [RouterQueryParams.SPECIES]: string;
  [RouterQueryParams.GENDER]: CharacterGender;
};

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Characters = PaginatedData<Character>;
