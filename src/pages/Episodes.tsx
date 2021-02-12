import React, { memo, VFC } from "react";
import { EpisodeQueryParams, Episodes as EpisodesType } from "types/episode";
import APIPaths from "api/apiAddresses";
import Gutter from "components/common/Gutter";
import Loader from "containers/common/Loader";
import { ObjToFilterInputProps } from "containers/common/FilterInput";
import { RouterQueryParams } from "types/router";
import useQueryParamsSWR from "utils/useQueryParamsSWR";
import DataTableContainer from "components/table/DataTableContainer";

const filters: ObjToFilterInputProps<EpisodeQueryParams>[] = [
  { label: "Name", fieldKey: RouterQueryParams.NAME },
  { label: "Episode", fieldKey: RouterQueryParams.EPISODE },
];

const Episodes: VFC = memo(() => {
  const { queryParams, data } = useQueryParamsSWR<
    EpisodesType,
    EpisodeQueryParams
  >(APIPaths.EPISODE);

  return (
    <Gutter>
      <Loader
        component={DataTableContainer}
        data={data}
        headers={filters}
        queryParams={queryParams}
        path={APIPaths.EPISODE}
      />
    </Gutter>
  );
});

export default Episodes;
