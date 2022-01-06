import React, { FC, ReactNode } from "react";

import { Directions } from "../../models";

import Button from "../../styled-components/components/Button";

export interface ChangeSongButtonProps {
  /** 要切到上首或下首 */
  direction: keyof typeof Directions;
  /** 按鈕的內容 */
  children?: ReactNode;
  /**
   * 切換曲目的方法
   * @param direction 上首或下首
   */
  onChange(direction: keyof typeof Directions): void;
}

/**
 * 切換上下首歌曲的按鈕
 * @param params0
 * @returns
 */
const ChangeSongButton: FC<ChangeSongButtonProps> = ({
  direction,
  children,
  onChange,
}) => (
  <Button
    title={`切至${direction === Directions.prev ? "上" : "下"}一首`}
    onClick={() => onChange(direction)}
  >
    {children || `${direction === Directions.prev ? "上" : "下"}一首`}
  </Button>
);

export default ChangeSongButton;
