import React, { VFC } from "react";
import Tab from "@material-ui/core/Tab";
import MuiTabs from "@material-ui/core/Tabs";
import { Link, matchPath, useLocation } from "react-router-dom";
import { tabs } from "utils/tabs";
import "styled-components/macro";
import { TabQuery } from "types/tab";
import { RouterParams } from "types/router";

const Tabs: VFC = () => {
  const { pathname } = useLocation();

  const tab =
    matchPath<TabQuery>(pathname, {
      path: `/:${RouterParams.TAB}`,
    })?.params[RouterParams.TAB] || tabs[0].path;

  return (
    <MuiTabs
      variant="scrollable"
      scrollButtons="auto"
      value={tab}
      indicatorColor="primary"
    >
      {tabs.map((item, index) => (
        <Tab
          key={index}
          value={item.path}
          component={Link}
          to={`/${item.path}`}
          label={item.text}
        />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
