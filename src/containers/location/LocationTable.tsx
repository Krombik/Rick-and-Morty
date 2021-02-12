import React, { VFC } from "react";
import ItemInfoTable from "components/table/ItemInfoTable";
import ItemInfoRow from "components/table/ItemInfoRow";
import { Location } from "types/location";
import OpenModalButtons from "containers/modal/OpenModalButtons";

type Props = {
  data: Location;
};

const LocationTable: VFC<Props> = ({ data }) => {
  return (
    <ItemInfoTable>
      <ItemInfoRow header="Name" cell={data.name} />
      <ItemInfoRow header="Type" cell={data.type} />
      <ItemInfoRow header="Dimension" cell={data.dimension} />
      <ItemInfoRow
        header="Last seen in"
        cell={<OpenModalButtons urls={data.residents} />}
      />
    </ItemInfoTable>
  );
};

export default LocationTable;
