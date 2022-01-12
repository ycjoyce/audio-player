import styled from "styled-components";

import fontSizes from "../../styled-components/abstract/font";
import spacing from "../../styled-components/abstract/spacing";

import { FullWidthBox } from "../../styled-components/components/Box";

/** 進度條樣式 */
export const StyledProgressGroup = styled.div`
  font-size: ${fontSizes.small}em;
  margin-bottom: ${spacing[3]}em;

  ${FullWidthBox} {
    margin-bottom: ${spacing[3]}em;
  }
`;
