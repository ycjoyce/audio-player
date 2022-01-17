import { ThemeColors } from "../abstract/theme";
/** 按鈕樣式 */
export declare enum ButtonStyles {
    solid = "solid",
    outline = "outline"
}
interface Props {
    /** 按鈕樣式（空心或實心） */
    buttonStyle?: keyof typeof ButtonStyles;
    /** 色系 */
    themeColor?: keyof typeof ThemeColors;
}
/** 按鈕 */
declare const Button: import("styled-components").StyledComponent<"button", any, Props, never>;
export default Button;
