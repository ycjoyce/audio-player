import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "normalize.css";
import "./node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import theme from "./src/styled-components/abstract/theme";
import { GlobalStyle } from "./src/styled-components/components/Global";

import App from "./src/components/App/App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
