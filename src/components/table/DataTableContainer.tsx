import React, { VFC } from "react";
import PaginatedContainer from "containers/common/PaginatedContainer";
import DataTable, { DataTableProps } from "./DataTable";

type Props = {
  queryParams: Record<string, string>;
} & DataTableProps;

const DataTableContainer: VFC<Props> = ({
  data,
  queryParams,
  headers,
  path,
}) => {
  return (
    <PaginatedContainer queryParams={queryParams} pagesCount={data.info.pages}>
      <DataTable data={data} headers={headers} path={path} />
    </PaginatedContainer>
  );
};

export default DataTableContainer;
