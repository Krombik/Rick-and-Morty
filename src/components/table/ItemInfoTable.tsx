import React, { FC } from "react";
import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

const ItemInfoTable: FC = ({ children }) => (
  <TableContainer component={Paper}>
    <MuiTable>
      <TableBody>{children}</TableBody>
    </MuiTable>
  </TableContainer>
);

export default ItemInfoTable;
