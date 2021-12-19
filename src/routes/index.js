import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../util/asyncComponent";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route
        path={`${match.url}main`}
        component={asyncComponent(() =>
          import("../routes/main/dashboard/Listing/index")
        )}
      />
    </Switch>
  </div>
);

export default App;
