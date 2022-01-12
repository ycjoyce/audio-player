import styled, { keyframes } from "styled-components";

import { ThemeColors } from "../abstract/theme";
import fontSizes from "../abstract/font";

import { MaskBox } from "./Box";

/** 旋轉動畫 */
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/** Loading 遮罩元素 */
export const Loading = styled(MaskBox)`
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
