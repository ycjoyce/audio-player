import styled, { css } from "styled-components";

import { ThemeColors, ButtonStyles } from "../../models";
import spacing from "../abstract/spacing";

interface Props {
  /**
   * 按鈕樣式（空心或實心）
   */
  buttonStyle?: keyof typeof ButtonStyles;
  /**
   * 色系
   */
  themeColor?: keyof typeof ThemeColors;
}

/**
 * 按鈕
 */
const Button = styled.button<Props>`
  padding: ${spacing[1]}em ${spacing[2]}em;
  margin: ${spacing[1]}em;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid
    ${({ theme, themeColor }) =>
      themeColor ? theme[themeColor] : "transparent"};
  transition: filter 0.3s;

  ${({ buttonStyle = ButtonStyles.solid, themeColor, theme }) =>
    buttonStyle === ButtonStyles.outline
      ? css`
          background-color: ${theme.white};
          color: ${themeColor ? theme[themeColor] : "inherit"};
        `
      : css`
          background-color: ${themeColor ? theme[themeColor] : "transparent"};
        `}

  &:hover {
    filter: brightness(1.1);
  }
`;

export default Button;
