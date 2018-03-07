import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { Router, Route, Switch, NavLink, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import MenuTop from "../containers/menu_top";
import ErrorPage from "../containers/error_page";
import DashboardPage from "../containers/dashboard_page";
import DataPage from "../components/data_page";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <MenuTop />

      <Container style={{ marginTop: "5em" }}>
        <Switch>
          <Route path="/" component={DashboardPage} exact />
          <Redirect from="/data" to="/data/timeSheets" exact />
          <Route path="/data/:id" component={DataPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Container>
    </div>
  </Router>
);

export default AppRouter;
