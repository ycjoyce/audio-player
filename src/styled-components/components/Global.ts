import { createGlobalStyle } from "styled-components";

import { ThemeColors } from "../../models";
import theme from "../abstract/theme";

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${theme[ThemeColors.dark]};
  }
`;
