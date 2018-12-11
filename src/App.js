import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Home from "./Home";
import HigherOrderComponents from "./HigherOrderComponents";
import RenderProps from "./RenderProps";
import Hooks from "./Hooks";

const baseUrl = process.env.PUBLIC_URL;

const App = ({ classes, location }) => {
  return (
    <Fragment>
      <AppBar position="static" color="default">
        <Tabs centered value={location.pathname}>
          <Tab
            label="Home"
            value={`${baseUrl}/`}
            component={Link}
            to={`${baseUrl}/`}
          />
          <Tab
            label="Higher Order Components"
            value={`${baseUrl}/higher-order-components`}
            component={Link}
            to={`${baseUrl}/higher-order-components`}
          />
          <Tab
            label="Render Props"
            value={`${baseUrl}/render-props`}
            component={Link}
            to={`${baseUrl}/render-props`}
          />
          <Tab
            label="Hooks"
            value={`${baseUrl}/hooks`}
            component={Link}
            to={`${baseUrl}/hooks`}
          />
        </Tabs>
      </AppBar>
      <Grid container justify="center">
        <Switch>
          <Route exact path={`${baseUrl}/`} component={Home} />
          <Route
            exact
            path={`${baseUrl}/higher-order-components`}
            component={HigherOrderComponents}
          />
          <Route
            exact
            path={`${baseUrl}/render-props`}
            component={RenderProps}
          />
          <Route exact path={`${baseUrl}/hooks`} component={Hooks} />
        </Switch>
      </Grid>
    </Fragment>
  );
};

export default withRouter(App);
