import styled from "styled-components";

import fontSizes from "../../styled-components/abstract/font";
import spacing from "../../styled-components/abstract/spacing";

import { FlexBox, FullWidthBox } from "../../styled-components/components/Box";

/** 進度條樣式 */
export const StyledProgressGroup = styled.div`
  font-size: ${fontSizes.small}em;
  margin-bottom: ${spacing[3]}em;

  ${FullWidthBox} {
    margin: 0 20px;
  }

  ${FlexBox} {
    align-items: center;
  }
`;
