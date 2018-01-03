import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "babel-polyfill";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import history from "./routers/history";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
