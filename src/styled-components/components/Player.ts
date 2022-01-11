import styled, { css } from "styled-components";

import { ThemeColors } from "../../models";
// import theme from "../abstract/theme";
import fontSizes from "../abstract/font";
import spacing from "../abstract/spacing";

import Button from "./Button";
import { ShadowBox } from "./Box";

const buttonGroupParts = 4;

/** 播放器的按鈕列 */
export const PlayerButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: "";
    flex: 1 1 ${100 / buttonGroupParts}%;
  }

  ${Button} {
    color: ${({ theme }) => theme[ThemeColors.dark]};
  }
`;

/** 播放器的按鈕群組 */
export const PlayerButtons = styled.div<{ level: "main" | "sub" }>`
  ${({ level }) =>
    level === "main"
      ? css`
          flex: 1 1 ${(100 / buttonGroupParts) * 2}%;
          text-align: center;
          font-size: ${fontSizes.headings[4]}em;
        `
      : css`
          flex: 1 1 ${100 / buttonGroupParts}%;
          text-align: right;
        `}
`;

/** 播放器裡的各個區段 */
export const PlayerSection = styled.div<{ disabled?: boolean }>`
  padding: ${spacing[4]}em;

  ${({ disabled }) =>
    disabled &&
    css`
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 2;
      }
    `}
`;

/** 播放器的容器 */
export const PlayerBox = styled(ShadowBox)`
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
  position: relative;
`;
