import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import theme from "../../styled-components/abstract/theme";
import GlobalStyle from "../../styled-components/components/Global";
import Player, { PlayerProps } from "../Player/Player";

const PlayerWithTheme: FC<PlayerProps> = props => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Player {...props} />
  </ThemeProvider>
);

export default PlayerWithTheme;
