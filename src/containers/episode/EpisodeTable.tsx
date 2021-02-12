import React, { VFC } from "react";
import ItemInfoTable from "components/table/ItemInfoTable";
import ItemInfoRow from "components/table/ItemInfoRow";
import { Episode } from "types/episode";
import OpenModalButtons from "containers/modal/OpenModalButtons";

type Props = {
  data: Episode;
};

const EpisodeTable: VFC<Props> = ({ data }) => {
  return (
    <ItemInfoTable>
      <ItemInfoRow header="Name" cell={data.name} />
      <ItemInfoRow header="Air date" cell={data.air_date} />
      <ItemInfoRow header="Code" cell={data.episode} />
      <ItemInfoRow
        header="Characters"
        cell={<OpenModalButtons urls={data.characters} />}
      />
    </ItemInfoTable>
  );
};

export default EpisodeTable;
