import React, { FC, useState, useEffect } from "react";

import Button from "../../styled-components/components/Button";

export interface RateButtonProps {
  /** 播放速度 */
  rates: number[];
  /**
   * 更新播放速度的事件處理
   * @param rate 更新的速度
   */
  onUpdate(rate: number): void;
}

/**
 * 播放速度按鈕
 * @param param0
 * @returns
 */
const RateButton: FC<RateButtonProps> = ({ rates, onUpdate }) => {
  const [currentRateIndex, setCurrentRateIndex] = useState(0);
  const rate = rates[currentRateIndex] < 1 ? 1 : rates[currentRateIndex];

  /**
   * 處理速度按鈕點擊事件
   */
  const handleClick = (): void => {
    setCurrentRateIndex(idx => (idx + 1 > rates.length - 1 ? 0 : idx + 1));
  };

  useEffect(() => {
    // 每當更新速度，呼叫 onUpdate
    onUpdate(rate);
  }, [rate, onUpdate]);

  return (
    <Button title={`以${rate}倍速度播放`} onClick={handleClick}>
      {rate}x
    </Button>
  );
};

export default RateButton;
