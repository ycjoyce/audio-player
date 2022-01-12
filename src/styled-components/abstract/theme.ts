/** 色系 */
export enum ThemeColors {
  primary = "primary",
  secondary = "secondary",
  white = "white",
  light = "light",
  dark = "dark",
}

/** 色系 */
const theme: { [themeColor in keyof typeof ThemeColors]: string } = {
  [ThemeColors.primary]: "pink",
  [ThemeColors.secondary]: "#ccc",
  [ThemeColors.white]: "#fff",
  [ThemeColors.light]: "#eee",
  [ThemeColors.dark]: "#555",
};

export default theme;
