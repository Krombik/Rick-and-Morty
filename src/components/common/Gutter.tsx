import React, { FC } from "react";
import Container, { ContainerProps } from "@material-ui/core/Container";
import Grid, { GridProps } from "@material-ui/core/Grid";

export const gutterSpacing = 3;

const Gutter: FC<GridProps & Pick<ContainerProps, "maxWidth">> = ({
  children,
  maxWidth = "lg",
  justify,
  direction,
  wrap,
  alignItems,
  ...props
}) =>
  children ? (
    <Grid justify="center" {...props} item container xs={12}>
      <Grid
        item
        container
        spacing={gutterSpacing}
        component={Container}
        disableGutters
        maxWidth={maxWidth}
        justify={justify}
        direction={direction}
        wrap={wrap}
        alignItems={alignItems}
      >
        {children}
      </Grid>
    </Grid>
  ) : null;

export default Gutter;
