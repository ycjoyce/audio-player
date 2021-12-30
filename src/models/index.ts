/**
 * 睡眠模式選項
 * text: 顯示文字 / minutes: 幾分鐘後暫停
 */
export type sleepOption = { text: string; minutes: number };

/**
 * 音源資料
 * name: 曲目名稱 / artist: 藝術家 / url: 音源網址
 */
export type audioSrc = {
  name?: string;
  artist?: string;
  img?: string;
  url: string;
};

/**
 * 方向（前/後)
 */
export enum Directions {
  prev = "prev",
  next = "next",
}

/**
 * 文字格式
 */
export enum TextFormats {
  time = "time",
  original = "original",
}

/**
 * 色系
 */
export enum ThemeColors {
  primary = "primary",
  secondary = "secondary",
  white = "white",
  light = "light",
  dark = "dark",
}

/**
 * 按鈕樣式
 */
export enum ButtonStyles {
  solid = "solid",
  outline = "outline",
}
