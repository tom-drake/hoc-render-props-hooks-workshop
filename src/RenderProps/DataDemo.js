import React from "react";
import ReactJson from "react-json-view";
import CircularProgress from "@material-ui/core/CircularProgress";

import DataLoader from "./DataLoader";

export default function DataDemo() {
  return (
    <DataLoader url="https://jsonplaceholder.typicode.com/users/1">
      {({ data, loading }) => {
        if (loading) {
          return <CircularProgress />;
        }
        return <ReactJson src={{ data }} />;
      }}
    </DataLoader>
  );
}
