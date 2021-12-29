import styled from "styled-components";

import fontSizes from "../abstract/font";
import spacing from "../abstract/spacing";

import { FullWidthBox } from "./Box";

/**
 * 進度條樣式
 */
export const ProgressGroup = styled.div`
  font-size: ${fontSizes.small}em;
  margin-bottom: ${spacing[3]}em;

  ${FullWidthBox} {
    margin-bottom: ${spacing[3]}em;
  }
`;
