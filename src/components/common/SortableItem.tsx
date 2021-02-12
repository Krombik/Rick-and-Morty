import React, { memo, PropsWithChildren } from "react";
import { SortableElement } from "react-sortable-hoc";

const SortableItem = memo(
  SortableElement(({ children }: PropsWithChildren<{}>) => <>{children}</>)
);

export default SortableItem;
