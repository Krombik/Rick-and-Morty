import React, { ReactNode, VFC } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "styled-components/macro";

type Props = {
  header: string;
  cell: ReactNode;
};

const ItemInfoRow: VFC<Props> = ({ header, cell }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {header}
    </TableCell>
    <TableCell align="right">
      <span
        css={`
          text-align: left;
          display: inline-block;
        `}
      >
        {cell}
      </span>
    </TableCell>
  </TableRow>
);

export default ItemInfoRow;
