import { createGlobalStyle } from "styled-components";

import { ThemeColors } from "../../models";
import theme from "../abstract/theme";

/** 全域樣式 */
export const GlobalStyle = createGlobalStyle`
  * {
    color: ${theme[ThemeColors.dark]};
  }
`;
