import styled, { keyframes } from "styled-components";

import { ThemeColors } from "../../styled-components/abstract/theme";
import fontSizes from "../../styled-components/abstract/font";

import { MaskBox } from "../../styled-components/components/Box";

/** 旋轉動畫 */
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled(MaskBox)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 2;

  .spinner {
    font-size: ${fontSizes.headings[4]}rem;
    color: ${({ theme }) => theme[ThemeColors.secondary]};
    animation: ${rotate} 1s ease-out infinite;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default StyledLoading;
