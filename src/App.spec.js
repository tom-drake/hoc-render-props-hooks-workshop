import React from "react";
import ReactDOM from "react-dom";

import HigherOrderComponents from "./HigherOrderComponents";
import RenderProps from "./RenderProps";
import Hooks from "./Hooks";

beforeAll(() => {
  global.Prism = {
    highlightElement: jest.fn()
  };
});

test("renders HigherOrderComponents without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HigherOrderComponents />, div);
});

test("renders RenderProps without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RenderProps />, div);
});

test("renders Hooks without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Hooks />, div);
});
