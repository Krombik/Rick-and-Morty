import React, { VFC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Characters from "pages/Characters";
import Episodes from "pages/Episodes";
import { MY_WATCH_LIST, tabs } from "utils/tabs";
import APIPaths from "api/apiAddresses";
import Locations from "pages/Locations";
import WatchLater from "pages/WatchLater";

const AppRouter: VFC = () => {
  return (
    <Switch>
      <Redirect from="/" to={`/${tabs[0].path}`} exact />
      <Route exact path={`/${APIPaths.CHARACTER}`} component={Characters} />
      <Route exact path={`/${APIPaths.EPISODE}`} component={Episodes} />
      <Route exact path={`/${APIPaths.LOCATION}`} component={Locations} />
      <Route exact path={`/${MY_WATCH_LIST}`} component={WatchLater} />
    </Switch>
  );
};

export default AppRouter;
