import React from "react";
import ReactDOM from "react-dom";
import {Helmet} from "react-helmet";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
