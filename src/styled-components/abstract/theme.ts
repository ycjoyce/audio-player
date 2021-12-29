import { ThemeColors } from "../../models";

/**
 * 色系
 */
const theme: { [themeColor in keyof typeof ThemeColors]: string } = {
  [ThemeColors.primary]: "pink",
  [ThemeColors.secondary]: "#ccc",
  [ThemeColors.white]: "#fff",
  [ThemeColors.light]: "#eee",
  [ThemeColors.dark]: "#555",
};

export default theme;
