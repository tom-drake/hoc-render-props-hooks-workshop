import React from "react";
import ReactJson from "react-json-view";
import { compose } from "recompose";

import withData from "./withData";
import withLoading from "./withLoading";

export default function DataDemoComposed() {
  const DataRender = ({ data }) => {
    return <ReactJson src={data} />;
  };

  const url = "https://jsonplaceholder.typicode.com/users/1";

  const EnhancedComponent = compose(
    withData(url),
    withLoading
  )(DataRender);

  return <EnhancedComponent />;
}
