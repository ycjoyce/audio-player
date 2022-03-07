import styled from "styled-components";

import { ThemeColors } from "../../styled-components/abstract/theme";
import fontSizes from "../../styled-components/abstract/font";

import { List } from "../../styled-components/components/List";

/** 睡眠模式列表 */
export const StyledSleepList = styled(List)`
  position: absolute;
  right: 0.25em;
  top: 2em;
  width: 100%;
  min-width: 100px;
  border: 1px solid ${({ theme }) => theme[ThemeColors.secondary]};
  font-size: ${fontSizes.small}em;
  text-align: center;
  background-color: #fff;
  color: ${({ theme }) => theme[ThemeColors.dark]};
`;
