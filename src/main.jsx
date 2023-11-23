import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ThemeProvider from "@cobalt/react-theme-provider";
import "antd/dist/reset.css";

import "./index.css";

const rootEl = document.getElementById("root");

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootEl,
);
