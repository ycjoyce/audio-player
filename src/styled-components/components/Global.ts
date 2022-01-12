import { createGlobalStyle } from "styled-components";

import theme, { ThemeColors } from "../abstract/theme";

/** 全域樣式 */
const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  body {
    color: ${props => props.theme[ThemeColors.dark]};
  }
`;

export default GlobalStyle;
