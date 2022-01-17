/** 色系 */
export declare enum ThemeColors {
    primary = "primary",
    secondary = "secondary",
    white = "white",
    light = "light",
    dark = "dark"
}
/** 色系 */
declare const theme: {
    [themeColor in keyof typeof ThemeColors]: string;
};
export default theme;
