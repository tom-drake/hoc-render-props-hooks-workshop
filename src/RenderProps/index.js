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

const RenderProps = ({ classes }) => {
  const [withDataLoader, mountDataLoader] = useState(false);
  const [withDataLoaderComposed, mountDataLoaderComposed] = useState(false);

  return (
    <div className={classes.content}>
      <Typography className={classes.heading} variant="h2" gutterBottom>
        Render Props
      </Typography>
      <Typography variant="h3" gutterBottom>
        What are they?
      </Typography>
      <Typography className={classes.content} component="p">
        A render props is function prop which is passed in to the component to
        tell it how to render rather than implementing its own logic.
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>`}
      </PrismCode>
      <Typography className={classes.content} component="p">
        In this case its using render as the prop, however another common
        pattern is to use the children prop as a function instead.
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`<DataProvider>
  {data => (
    <h1>Hello {data.target}</h1>
  )}
</DataProvider>`}
      </PrismCode>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        How are they made?
      </Typography>
      <Typography className={classes.content} component="p">
        They are written like any other react component but instead of
        implementing their own way of rendering they basically defer this to the
        render prop.
      </Typography>
      <Typography variant="h4">Data loader Render Prop</Typography>
      <PrismCode component="pre" className="language-jsx">
        {`import { Component } from "react";
import axios from "axios";

const CancelToken = axios.CancelToken;

export default class DataLoader extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    axios
      .get(this.props.url, {
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
    return this.props.children({ ...this.state });
  }
}`}
      </PrismCode>
      <Typography variant="h4">Render Prop usage</Typography>
      <PrismCode component="pre" className="language-jsx">
        {`<DataLoader url="https://jsonplaceholder.typicode.com/users/1">
  {({ data, loading }) => {
    if (loading) {
      return <CircularProgress />;
    }
    return <ReactJson src={{ data }} />;
  }}
</DataLoader>`}
      </PrismCode>
      <Paper className={classes.datademo} elevation={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataLoader(true)}
        >
          Mount
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataLoader(false)}
        >
          Unmount
        </Button>
        {withDataLoader && (
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
        It's simple to compose them as they are just components.
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`<DataLoader url="https://jsonplaceholder.typicode.com/users/1">
  {({ data: dataUsers, loading: loadingUsers }) => (
    <DataLoader url="https://jsonplaceholder.typicode.com/todos/1">
      {({ data: dataTodos, loading: loadingTodos }) => {
        if (loadingUsers && loadingTodos) {
          return <CircularProgress />;
        }
        return (
          <ReactJson src={{ users: dataUsers, todos: dataTodos }} />
        );
      }}
    </DataLoader>
  )}
</DataLoader>`}
      </PrismCode>
      <Paper className={classes.datademo} elevation={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataLoaderComposed(true)}
        >
          Mount
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => mountDataLoaderComposed(false)}
        >
          Unmount
        </Button>
        {withDataLoaderComposed && (
          <div>
            <DataDemoComposed />
          </div>
        )}
      </Paper>
      <Typography className={classes.content} component="p">
        But wait, this is going to become messy quickly. Our actual component is
        hidden deep in these nested render functions. We can use a similar
        solution as we did with the HoCs. In this case we will use 'react-adopt'
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`import { adopt } from "react-adopt";

const Composed = adopt({
  users: <DataLoader url="https://jsonplaceholder.typicode.com/users/1" />,
  todos: <DataLoader url="https://jsonplaceholder.typicode.com/todos/1" />
});

function MyComponent() {
  return (
    <Composed>
      {({ users, todos }) => {
        if (users.loading && todos.loading) {
          return <CircularProgress />;
        }
        return <ReactJson src={{ users: users.data, todos: todos.data }} />;
      }}
    </Composed>
  );
}`}
      </PrismCode>
      <Typography variant="h3" gutterBottom>
        Pros?
      </Typography>
      <Typography className={classes.content} component="ul">
        <li>The consumer is in full control of any props its component has</li>
        <li>No magical props being passed to your component</li>
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        Cons?
      </Typography>
      <Typography className={classes.content} component="ul">
        <li>
          PureComponent is useless in most cases as the render prop is
          regenerated on each render. An instance method can be used and passed
          in as the render prop to solve this but it can split your code up a
          lot
        </li>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(RenderProps);
