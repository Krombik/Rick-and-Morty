import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import React, { memo, VFC } from "react";
import "styled-components/macro";
import SettingsDial from "containers/header/SettingsDial";
import { ThemeProps } from "types";
import Gutter, { gutterSpacing } from "./Gutter";
import Tabs from "containers/header/Tabs";
import Typography from "@material-ui/core/Typography";

const Header: VFC = memo(() => (
  <AppBar
    position="static"
    color="default"
    css={`
      margin-bottom: ${({ theme }: ThemeProps) =>
        theme.spacing(gutterSpacing) / 2}px;
      padding-bottom: 0 !important;
      padding-top: 0 !important;
    `}
    component={Gutter}
    //@ts-ignore
    justify="space-between"
    alignItems="center"
  >
    <Grid item>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="h5">Rick and Morty</Typography>
        </Grid>
        <Grid item>
          <Tabs />
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <SettingsDial />
    </Grid>
  </AppBar>
));

export default Header;
