import React, { FC, ReactNode } from "react";

import { Directions } from "../../models";

import Button from "../../styled-components/components/Button";

export interface JumpButtonProps {
  /**  要跳到哪個方向（前或後） */
  direction: keyof typeof Directions;
  /** 要跳到相隔秒數幾秒的地方 */
  gap: number;
  /** 按鈕內容 */
  children?: ReactNode;
  /**
   * 處理跳轉的方法
   * @param direction 方向（前或後）
   * @param gap 要跳到相隔秒數幾秒的地方
   */
  onJump(direction: keyof typeof Directions, gap: number): void;
}

/**
 * 播放器跳到前後秒數的按鈕
 * @param param0
 * @returns
 */
const JumpButton: FC<JumpButtonProps> = ({
  direction,
  gap,
  children,
  onJump,
}) => (
  <Button
    title={`跳至${gap}秒${direction === Directions.prev ? "前" : "後"}`}
    onClick={() => onJump(direction, gap)}
  >
    {children || `${direction === Directions.prev ? "前" : "後"}${gap}秒`}
  </Button>
);

export default JumpButton;
