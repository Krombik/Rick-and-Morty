import React from "react";
import DragIndicator from "@material-ui/icons/DragIndicator";
import { SortableHandle } from "react-sortable-hoc";
import "styled-components/macro";

const DragHandle = SortableHandle(() => (
  <DragIndicator
    css={`
      cursor: grab;
    `}
  />
));

export default DragHandle;
