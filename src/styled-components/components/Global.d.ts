import theme from "../abstract/theme";
/** 全域樣式 */
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{
    theme: typeof theme;
}, import("styled-components").DefaultTheme>;
export default GlobalStyle;
