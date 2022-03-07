import styled, { css } from "styled-components";

import { device } from "../../styled-components/abstract/breakpoint";
import spacing from "../../styled-components/abstract/spacing";
import fontSizes from "../../styled-components/abstract/font";

import Button from "../../styled-components/components/Button";

const buttonGroupParts = 4;

/** 播放器的按鈕列 */
const StyledPlayerButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media all and ${device.sm} {
    flex-direction: row;
  }

  &::before {
    content: "";
    flex: 1 1 ${100 / buttonGroupParts}%;
  }

  ${Button} {
    color: #fff;
    padding: ${spacing[1]}em;
  }
`;

/** 播放器的按鈕群組 */
export const StyledPlayerButtons = styled.div<{ level: "main" | "sub" }>`
  ${({ level }) =>
    level === "main"
      ? css`
          flex: 1 1 ${(100 / buttonGroupParts) * 2}%;
          text-align: center;

          ${Button} {
            font-size: ${fontSizes.normal}em;

            @media all and ${device.sm} {
              font-size: ${fontSizes.headings[5]}em;
            }
          }
        `
      : css`
          flex: 1 1 ${100 / buttonGroupParts}%;
          text-align: right;
        `}
`;

export default StyledPlayerButtonGroup;
