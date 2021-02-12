import React, { memo, VFC } from "react";
import {
  CharacterQueryParams,
  CharacterGender,
  CharacterStatus,
  Characters as CharactersType,
} from "types/character";
import APIPaths from "api/apiAddresses";
import Gutter from "components/common/Gutter";
import Loader from "containers/common/Loader";
import CharactersContainer from "containers/characters/CharactersContainer";
import FilterInput, {
  ObjToFilterInputProps,
} from "containers/common/FilterInput";
import { RouterQueryParams } from "types/router";
import Grid from "@material-ui/core/Grid";
import useQueryParamsSWR from "utils/useQueryParamsSWR";

const filters: ObjToFilterInputProps<CharacterQueryParams>[] = [
  { label: "Species", fieldKey: RouterQueryParams.SPECIES },
  {
    label: "Gender",
    fieldKey: RouterQueryParams.GENDER,
    values: Object.values(CharacterGender),
  },
  {
    label: "Status",
    fieldKey: RouterQueryParams.STATUS,
    values: Object.values(CharacterStatus),
  },
];

const Characters: VFC = memo(() => {
  const { queryParams, data } = useQueryParamsSWR<
    CharactersType,
    CharacterQueryParams
  >(APIPaths.CHARACTER);

  return (
    <Gutter>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {filters.map((props, index) => (
            <Grid item key={index} md xs={12}>
              <FilterInput {...props} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Loader
        component={CharactersContainer}
        data={data}
        queryParams={queryParams}
      />
    </Gutter>
  );
});

export default Characters;
