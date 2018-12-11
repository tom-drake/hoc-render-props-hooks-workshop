import React from "react";
import { adopt } from "react-adopt";
import ReactJson from "react-json-view";
import CircularProgress from "@material-ui/core/CircularProgress";

import DataLoader from "./DataLoader";

const Composed = adopt({
  users: <DataLoader url="https://jsonplaceholder.typicode.com/users/1" />,
  todos: <DataLoader url="https://jsonplaceholder.typicode.com/todos/1" />
});

export default function DataDemoComposed() {
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
}
