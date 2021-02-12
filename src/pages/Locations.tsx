import React, { memo, VFC } from "react";
import {
  LocationQueryParams,
  Locations as LocationsType,
} from "types/location";
import APIPaths from "api/apiAddresses";
import Gutter from "components/common/Gutter";
import Loader from "containers/common/Loader";
import { ObjToFilterInputProps } from "containers/common/FilterInput";
import { RouterQueryParams } from "types/router";
import useQueryParamsSWR from "utils/useQueryParamsSWR";
import DataTableContainer from "components/table/DataTableContainer";

const filters: ObjToFilterInputProps<LocationQueryParams>[] = [
  { label: "Name", fieldKey: RouterQueryParams.NAME },
  { label: "Type", fieldKey: RouterQueryParams.TYPE },
  { label: "Dimension", fieldKey: RouterQueryParams.DIMENSION },
];

const Locations: VFC = memo(() => {
  const { queryParams, data } = useQueryParamsSWR<
    LocationsType,
    LocationQueryParams
  >(APIPaths.LOCATION);

  return (
    <Gutter>
      <Loader
        component={DataTableContainer}
        data={data}
        headers={filters}
        queryParams={queryParams}
        path={APIPaths.LOCATION}
      />
    </Gutter>
  );
});

export default Locations;
