import React, { VFC } from "react";
import { CharacterQueryParams, Characters } from "types/character";
import PaginatedContainer from "containers/common/PaginatedContainer";
import CharacterPreview from "./CharacterPreview";
import Grid from "@material-ui/core/Grid";

type Props = {
  data: Characters;
  queryParams: CharacterQueryParams;
};

const CharactersContainer: VFC<Props> = ({ data, queryParams }) => {
  return (
    <PaginatedContainer queryParams={queryParams} pagesCount={data.info.pages}>
      {data.results.map((item, index) => (
        <Grid item xs={12} lg={6} key={index}>
          <CharacterPreview data={item} />
        </Grid>
      ))}
    </PaginatedContainer>
  );
};

export default CharactersContainer;
