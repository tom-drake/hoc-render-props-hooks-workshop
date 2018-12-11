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

const App = ({ classes, location }) => {
  return (
    <Fragment>
      <AppBar position="static" color="default">
        <Tabs centered value={location.pathname}>
          <Tab label="Home" value="/" component={Link} to="/" />
          <Tab
            label="Higher Order Components"
            value="/higher-order-components"
            component={Link}
            to="/higher-order-components"
          />
          <Tab
            label="Render Props"
            value="/render-props"
            component={Link}
            to="/render-props"
          />
          <Tab label="Hooks" value="/hooks" component={Link} to="/hooks" />
        </Tabs>
      </AppBar>
      <Grid container justify="center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/higher-order-components"
            component={HigherOrderComponents}
          />
          <Route exact path="/render-props" component={RenderProps} />
          <Route exact path="/hooks" component={Hooks} />
        </Switch>
      </Grid>
    </Fragment>
  );
};

export default withRouter(App);
