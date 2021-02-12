import React, { VFC } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { PaginatedData, ThunkDispatcher } from "types";
import FilterInput, { FilterInputProps } from "containers/common/FilterInput";
import { useDispatch } from "react-redux";
import { setModal } from "redux/modal/actions";
import "styled-components/macro";

export type DataTableProps = {
  headers: FilterInputProps[];
  data: PaginatedData<Record<string, any>>;
  path: string;
};

const DataTable: VFC<DataTableProps> = ({ headers, data, path }) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((item, index) => (
              <TableCell component="th" key={index}>
                <FilterInput {...item} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map((row, i) => (
            <TableRow
              key={i}
              onClick={() => {
                dispatch(setModal({ open: true, id: row.id, path }));
              }}
              css={`
                cursor: pointer;
              `}
            >
              {headers.map((header, j) => (
                <TableCell key={j}>{row[header.fieldKey]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
