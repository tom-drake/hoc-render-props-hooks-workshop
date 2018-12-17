import React, { useState } from "react";
import PrismCode from "react-prism";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import DataDemo from "./DataDemo";

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

const Hooks = ({ classes }) => {
  const [withDataLoader, mountDataLoader] = useState(false);

  return (
    <div className={classes.content}>
      <Typography className={classes.heading} variant="h2" gutterBottom>
        Hooks
      </Typography>
      <Typography variant="h3" gutterBottom>
        What are they?
      </Typography>
      <Typography className={classes.content} component="p">
        'Hooks are an upcoming feature that lets you use state and other React
        features without writing a class'
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {`import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
      </PrismCode>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        How are they made?
      </Typography>
      <Typography className={classes.content} component="p">
        A few hooks are provided by react such as useState and useEffect but you
        can make your own by simply prepending your function with 'use'.
        Generally your own hook will make use of the built in hooks or other
        hooks.
      </Typography>
      <Typography variant="h4">Data loader Render Prop</Typography>
      <PrismCode component="pre" className="language-jsx">
        {`function useData(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(
    () => {
      let cancelToken;
      axios
        .get(url, {
          cancelToken: new CancelToken(c => (cancelToken = c))
        })
        .then(({ data }) => {
          setLoading(false);
          setData(data);
        })
        .catch(error => {
          setLoading(false);
          if (!axios.isCancel(error)) setError(error);
        });

      return () => cancelToken && cancelToken();
    },
    [url]
  );

  return { loading, data, error };
}`}
      </PrismCode>
      <Typography variant="h4">Hooks usage</Typography>
      <PrismCode component="pre" className="language-jsx">
        {`function DataDemo() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const { data, loading, error } = useData(url);

  if (loading) {
    return <CircularProgress />;
  }
  return <ReactJson src={{ data, error }} />;
}`}
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
        Just use your hooks like any other function calls!
      </Typography>
      <Typography variant="h3" gutterBottom>
        Pros?
      </Typography>
      <Typography className={classes.content} component="ul">
        <li>No need for classes</li>
        <li>No need for 'this'</li>
        <li>Easy to compose</li>
        <li>Replaces both the HoC and render props patterns</li>
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        Cons?
      </Typography>
      <Typography className={classes.content} component="ul">
        <li>Completely different to what we are used to</li>
        <li>
          Easy to break things i.e with conditional useState (anti-pattern) so
          need a linter to help
        </li>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Hooks);
