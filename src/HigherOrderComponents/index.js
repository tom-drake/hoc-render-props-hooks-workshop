import React, { useState } from "react";
import PrismCode from "react-prism";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import DataDemo from "./DataDemo";
import DataDemoComposed from "./DataDemoComposed";

const styles = {
  heading: {
    marginTop: 10
  },
  content: {
    fontSize: 20,
    maxWidth: 1000,
    marginBottom: 20
  },
  divider: {
    marginTop: 20,
    marginBottom: 20
  },
  datademo: {
    padding: 5,
    marginBottom: 20
  }
};

const HigherOrderComponents = ({ classes }) => {
  const [withDataDemo, mountDataDemo] = useState(false);
  const [withDataDemoComposed, mountDataDemoComposed] = useState(false);

  return (
    <div className={classes.content}>
      <Typography className={classes.heading} variant="h2" gutterBottom>
        Higher Order Components
      </Typography>
      <Typography variant="h3" gutterBottom>
        What are they?
      </Typography>
      <Typography className={classes.content} component="p">
        A higher-order component (HOC) is an technique in React for reusing
        component logic. HOCs are not part of the React API they are a pattern.
        A HOC takes a Component as an argument and returns a generated Component
        with additional functionality on top of your own Component. It may
        provide this functionality to your Component via passing props down or
        it could choose to render something else based on what props were passed
        to it.
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`const EnhancedComponent = higherOrderComponent(config)(WrappedComponent);`}
      </PrismCode>
      <PrismCode component="pre" className="language-jsx">
        {`const EnhancedComponent = higherOrderComponent(WrappedComponent);`}
      </PrismCode>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        How are they made?
      </Typography>
      <Typography className={classes.content} component="p">
        A HoC can be made in a few ways. It can be a function which returns a
        function which returns a class (see below) if some kind of configuration
        is required before passing a Component in or it can just be a function
        which returns a class. That class returned should be a react Component
        with a render method returning the WrappedComponent with some new prop
        or a different component. Problems occur if static methods are used on
        the WrappedComponent as they will not be passed up through the HoC.
        Those static methods need to be hoisted up, the library
        "hoist-non-react-statics" will help with this. Another caveat is that
        refs won't be passed along to the wrapped component. This can be solved
        by forwarding the ref along using the "React.forwardRef" API.
      </Typography>
      <Typography variant="h4">Data loader HoC</Typography>
      <PrismCode component="pre" className="language-jsx">
        {`import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import axios from "axios";

const CancelToken = axios.CancelToken;

export default function withData(url) {
  return function(WrappedComponent) {
    class EnhancedComponent extends Component {
      state = {
        loading: true
      };

      componentDidMount() {
        axios
          .get(url, {
            cancelToken: new CancelToken(c => {
              this.cancelToken = c;
            })
          })
          .then(({ data }) => this.setState({ data, loading: false }))
          .catch(error => {
            if (!axios.isCancel(error)) {
              this.setState({ error, loading: false });
            }
          });
      }

      componentWillUnmount() {
        if (this.cancelToken) this.cancelToken();
      }

      render() {
        return <WrappedComponent {...this.props} {...this.state} />;
      }
    }

    hoistNonReactStatic(EnhancedComponent, WrappedComponent);

    return React.forwardRef((props, ref) => {
      return <EnhancedComponent {...props} forwardedRef={ref} />;
    });
  };
}`}
      </PrismCode>
      <Typography variant="h4">HoC usage</Typography>
      <PrismCode component="pre" className="language-jsx">
        {`const DataRender = ({ data, loading }) => {
  if (loading) {
    return <CircularProgress />;
  }
  return <ReactJson src={{ data }} />;
};

const url = "https://jsonplaceholder.typicode.com/users/1";
const WrapperDataRender = withData(url)(DataRender);`}
      </PrismCode>
      <Paper className={classes.datademo} elevation={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataDemo(true)}
        >
          Mount
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataDemo(false)}
        >
          Unmount
        </Button>
        {withDataDemo && (
          <div>
            <DataDemo />
          </div>
        )}
      </Paper>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        Composing
      </Typography>
      <Typography className={classes.content} component="p">
        Let's say we want to use multiple HoCs on a single component we can do
        something like:
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`const DataRender = ({ data }) => {
  return <ReactJson src={data} />;
};

const LoadingDataRender = withLoading(DataRender);

const url = "https://jsonplaceholder.typicode.com/users/1";
const EnhancedComponent = withData(url)(LoadingDataRender);`}
      </PrismCode>
      <Paper className={classes.datademo} elevation={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataDemoComposed(true)}
        >
          Mount
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataDemoComposed(false)}
        >
          Unmount
        </Button>
        {withDataDemoComposed && (
          <div>
            <DataDemoComposed />
          </div>
        )}
      </Paper>
      <Typography className={classes.content} component="p">
        This could get quite messy with many HoCs being used. We can use a
        library such as recompose to compose multiple HoCs together.
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`const DataRender = ({ data }) => {
  return <ReactJson src={data} />;
};

const url = "https://jsonplaceholder.typicode.com/users/1";

const EnhancedComponent = compose(
  withData(url),
  withLoading
)(DataRender);`}
      </PrismCode>
      <Typography variant="h3" gutterBottom>
        Pros?
      </Typography>
      <Typography className={classes.content} component="ul">
        <li>Code reuse.</li>
        <li>
          Can be used to seperate the data layer from visual layer (Redux is a
          good example).
        </li>
        <li>Supports the single responsibility model.</li>
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        Cons?
      </Typography>
      <Typography className={classes.content} component="ul">
        <li>Props can be overriden by the wrapper without you knowing</li>
        <li>
          It's not always clear where props come from if looking at the
          component in isolation.
        </li>
        <li>
          Need to remeber to hoist the non react statics from the wrapped
          component
        </li>
        <li>
          Any ref attached to the HoC will attach only to the HoC and not the
          wrapped component. Need to use the forwardRef API provided by react.
          https://reactjs.org/docs/forwarding-refs.html
        </li>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(HigherOrderComponents);
