import React, { PropsWithChildren } from "react";
import { SortableContainer } from "react-sortable-hoc";

const SortableList = SortableContainer(
  ({ children }: PropsWithChildren<{}>) => <>{children}</>
);

export default SortableList;
