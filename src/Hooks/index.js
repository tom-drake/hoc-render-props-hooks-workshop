import React from "react";
import PrismCode from "react-prism";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// import DataDemo from "./DataDemo";
// import DataDemoComposed from "./DataDemoComposed";

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
  }
  // datademo: {
  //   padding: 5,
  //   marginBottom: 20
  // }
};

const Hooks = ({ classes }) => {
  return (
    <div className={classes.content}>
      <Typography className={classes.heading} variant="h2" gutterBottom>
        Hooks
      </Typography>
      <Typography variant="h3" gutterBottom>
        What are they?
      </Typography>
      <Typography className={classes.content} component="p">
        hooks
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {``}
      </PrismCode>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        How are they made?
      </Typography>
      <Typography className={classes.content} component="p">
        hooks
      </Typography>
      <Typography variant="h4">Data loader Render Prop</Typography>
      <PrismCode component="pre" className="language-jsx">
        {``}
      </PrismCode>
      <Typography variant="h4">Render Prop usage</Typography>
      <PrismCode component="pre" className="language-jsx">
        {``}
      </PrismCode>
      <Paper className={classes.datademo} elevation={1}>
        {/*<Button
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
        )}*/}
      </Paper>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        Composing
      </Typography>
      <Typography className={classes.content} component="p">
        compose
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {``}
      </PrismCode>
      <Paper className={classes.datademo} elevation={1}>
        {/*}<Button
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
        )}*/}
      </Paper>
      <Typography className={classes.content} component="p">
        messy compose
      </Typography>
      <PrismCode component="pre" className="language-jsx">
        {``}
      </PrismCode>
      <Typography variant="h3" gutterBottom>
        Pros?
      </Typography>
      <Typography className={classes.content} component="p">
        <ul>
          <li>pro</li>
        </ul>
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h3" gutterBottom>
        Cons?
      </Typography>
      <Typography className={classes.content} component="p">
        <ul>
          <li>con</li>
        </ul>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Hooks);
