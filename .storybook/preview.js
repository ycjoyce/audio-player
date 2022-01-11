import React from "react";
import { ThemeProvider } from "styled-components";

import "normalize.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import { GlobalStyle } from "../src/styled-components/components/Global";
import theme from "../src/styled-components/abstract/theme";

export const decorators = [
  story => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
