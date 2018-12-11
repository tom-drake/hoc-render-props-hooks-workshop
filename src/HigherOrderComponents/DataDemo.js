import React from "react";
import ReactJson from "react-json-view";
import CircularProgress from "@material-ui/core/CircularProgress";

import withData from "./withData";

export default function DataDemo() {
  const DataRender = ({ data, loading }) => {
    if (loading) {
      return <CircularProgress />;
    }
    return <ReactJson src={{ data }} />;
  };
  const EnhancedComponent = withData(
    "https://jsonplaceholder.typicode.com/users/1"
  )(DataRender);

  return <EnhancedComponent />;
}
