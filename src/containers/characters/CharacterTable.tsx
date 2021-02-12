import React, { VFC } from "react";
import { Character } from "types/character";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ItemInfoTable from "components/table/ItemInfoTable";
import ItemInfoRow from "components/table/ItemInfoRow";
import OpenModalButton from "containers/modal/OpenModalButton";
import OpenModalButtons from "containers/modal/OpenModalButtons";

type Props = {
  data: Character;
};

const CharacterTable: VFC<Props> = ({ data }) => {
  return (
    <ItemInfoTable>
      <TableRow>
        <TableCell colSpan={2} align="center">
          <img alt={data.name} src={data.image} />
        </TableCell>
      </TableRow>
      <ItemInfoRow header="Name" cell={data.name} />
      <ItemInfoRow header="Status" cell={data.status} />
      <ItemInfoRow header="Species" cell={data.species} />
      <ItemInfoRow header="Type" cell={data.type} />
      <ItemInfoRow header="Gender" cell={data.gender} />
      <ItemInfoRow
        header="Origin location"
        cell={<OpenModalButton text={data.origin.name} url={data.origin.url} />}
      />
      <ItemInfoRow
        header="Last known location"
        cell={
          <OpenModalButton text={data.location.name} url={data.location.url} />
        }
      />
      <ItemInfoRow
        header="Episodes"
        cell={<OpenModalButtons urls={data.episode} />}
      />
    </ItemInfoTable>
  );
};

export default CharacterTable;
