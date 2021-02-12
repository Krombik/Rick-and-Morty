export enum RouterParams {
  TAB = "tab",
}

export enum RouterQueryParams {
  PAGE = "page",
  NAME = "name",
  STATUS = "status",
  SPECIES = "species",
  TYPE = "type",
  GENDER = "gender",
  DIMENSION = "dimension",
  EPISODE = "episode",
}

export type PageQueryParam = {
  [RouterQueryParams.PAGE]?: string;
};
