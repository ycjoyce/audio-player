import React from "react";
import { ThemeProvider } from "styled-components";

import "normalize.css";

import GlobalStyle from "../src/styled-components/components/Global";
import theme from "../src/styled-components/abstract/theme";

export const decorators = [
  story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
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
