import React, { FC } from "react";
import "styled-components/macro";
import Alert from "containers/common/Alert";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Modal from "containers/modal/Modal";

const Layout: FC = ({ children }) => (
  <>
    <Grid
      container
      spacing={3}
      css={`
        margin: 0;
        width: 100%;
        min-height: 100vh;
        height: 100%;
      `}
      direction="column"
    >
      <Header />
      {children}
    </Grid>
    <Modal />
    <Alert />
  </>
);

export default Layout;
