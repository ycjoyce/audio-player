import styled from "styled-components";

import { ThemeColors } from "../abstract/theme";

/**
 * 取得進度條底色樣式
 * @param inputWidth range input 的寬度
 * @param color 進度條底色
 * @returns -webkit-slider-thumb 的 box-shadow
 */
const getProgress = (inputWidth = 100, color: string): string => {
  let val = `-1px 0 0 -2px ${color}`;
  for (let i = 2; i <= inputWidth; i += 1) {
    val += `, -${i}px 0 0 -2px ${color}`;
  }
  return val;
};

/** type 為 range 的 input */
export const InputRange = styled.input.attrs(({ width = 200, theme }) => ({
  type: "range",
  width,
  theme,
}))`
  -webkit-appearance: none;
  width: ${({ width }) => width}px;
  height: 10px;
  background: none;
  outline: none;
  border-radius: 0;
  overflow: hidden;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    background-color: ${({ theme }) => theme[ThemeColors.light]};
    height: 5px;
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    margin-top: -2.5px;
    -webkit-appearance: none;
    position: relative;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme[ThemeColors.white]};
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme[ThemeColors.primary]};
    box-shadow: ${({ width, theme }) =>
      getProgress(width as number, theme[ThemeColors.primary])};
  }
`;
