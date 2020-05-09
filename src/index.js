import React from "react";
import ReactDOM from "react-dom";

import App2 from "../src/containers/App2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App2 appTitle="Person Manager!!!" />
  </React.StrictMode>,
  rootElement
);
