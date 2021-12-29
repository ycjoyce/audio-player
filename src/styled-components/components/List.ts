import styled, { css } from "styled-components";

import { ThemeColors } from "../../models";
import theme from "../abstract/theme";

/**
 * 列表
 */
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

/**
 * 列表項目
 */
export const ListItem = styled.li<{ clickable?: boolean }>`
  padding: 0.5em;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme[ThemeColors.light]};
  }

  &.active {
    background-color: ${theme[ThemeColors.light]};
  }

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
    `}
`;
