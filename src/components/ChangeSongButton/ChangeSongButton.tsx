import React, { FC } from "react";

import { Directions } from "../../models";

import Button from "../../styled-components/components/Button";

interface Props {
  /**
   * 要切到上首或下首
   */
  direction: keyof typeof Directions;
  /**
   * 切換曲目的方法
   * @param direction 上首或下首
   */
  onChange(direction: keyof typeof Directions): void;
}

// 切換上下首歌曲的按鈕
const ChangeSongButton: FC<Props> = ({ direction, children, onChange }) => (
  <Button
    title={`切至${direction === Directions.prev ? "上" : "下"}一首`}
    onClick={() => onChange(direction)}
  >
    {children || `${direction === Directions.prev ? "上" : "下"}一首`}
  </Button>
);

export default ChangeSongButton;
