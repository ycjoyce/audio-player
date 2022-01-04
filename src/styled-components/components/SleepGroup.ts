import styled from "styled-components";

import { ThemeColors } from "../../models";
import theme from "../abstract/theme";
import fontSizes from "../abstract/font";

import { List } from "./List";

/** 睡眠模式群組 */
export const StyledSleepGroup = styled.div`
  position: relative;
  display: inline-block;
`;

/** 睡眠模式列表 */
export const StyledSleepList = styled(List)`
  position: absolute;
  right: 0.25em;
  top: 2em;
  width: 100%;
  min-width: 100px;
  border: 1px solid ${theme[ThemeColors.secondary]};
  font-size: ${fontSizes.small}em;
  text-align: center;
  background-color: ${theme[ThemeColors.white]};
`;
