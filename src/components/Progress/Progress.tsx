import React, { FC, useState, useEffect, FormEvent } from "react";

import formatTime from "../../utils/formatTime";

import { InputRange } from "../../styled-components/components/Controller";

import FullWidthBox from "../FullWidthBox/FullWidthBox";
import { FlexBox } from "../../styled-components/components/Box";
import { ProgressGroup } from "../../styled-components/components/Progress";

/** 文字格式 */
export enum TextFormats {
  time = "time",
  original = "original",
}

export interface ProgressProps {
  /** 全長 */
  totalLength: number;
  /** 目前位置 */
  currentPosition: number;
  /**
   * 是否顯示文字標示
   * time: 時間格式的文字／original: 原始傳進來的文字
   */
  text?: keyof typeof TextFormats;
  /** 是否已處理完更新事件 */
  updated?: boolean;
  /**
   * 更新進度條的事件處理
   * @param position 更新到進度條的哪個位置
   */
  onUpdate(position: number): void;
}

/**
 * 進度條
 * @param param0
 * @returns
 */
const Progress: FC<ProgressProps> = ({
  totalLength,
  currentPosition,
  text,
  onUpdate,
  updated = false,
}) => {
  /**
   * 調整不合法的全長及目前位置
   * @param length 全長
   * @param position 目前位置
   * @returns 調整過後的全長及目前位置
   */
  const convertedArgs = (
    length: number,
    position: number
  ): {
    convertedLength: number;
    convertedPosition: number;
  } => {
    // 如果全長或目前位置小於 0，則將其設為 0
    let convertedPosition = position;
    const convertedLength = length < 0 ? 0 : length;
    if (position < 0) {
      convertedPosition = 0;
    } else if (position > convertedLength) {
      // 如果目前位置大於全長，則將其設為與全長相同
      convertedPosition = convertedLength;
    }
    return {
      convertedLength,
      convertedPosition,
    };
  };

  /** 調整過後的全長及目前位置 */
  const {
    convertedLength: convertedTotalLength,
    convertedPosition: convertedCurrentPosition,
  } = convertedArgs(totalLength, currentPosition);

  /** range input 的 value */
  const [inputValue, setInputValue] = useState<number>(
    (convertedCurrentPosition / convertedTotalLength) * 100
  );

  /** 目前操作的 value，已操作完畢的話切換到 false */
  const [changingValue, setChangingValue] = useState<number | false>(false);

  /**
   * 處理 range input 的 input 事件
   * @param e
   */
  const handleInput = (e: FormEvent): void => {
    setChangingValue(+(e.target as HTMLInputElement).value);
  };

  /** 處理 range input 的滑鼠抬起事件 */
  const handleMouseUp = (): void => {
    if (changingValue !== false) {
      onUpdate((changingValue * convertedTotalLength) / 100);
    }
  };

  useEffect(() => {
    if (changingValue === false) {
      // 如果已經操作完畢，將 range input 的 value 設為現在位置的比例
      setInputValue((convertedCurrentPosition / convertedTotalLength) * 100);
    } else {
      // 正在操作的話，將 range input 的 value 設為現在操作到的地方
      setInputValue(changingValue);
    }
  }, [convertedCurrentPosition, convertedTotalLength, changingValue]);

  useEffect(() => {
    if (updated) {
      // 如果已處理完更新，將 changing value 設為 false
      setChangingValue(false);
    }
  }, [updated]);

  return (
    <ProgressGroup>
      <FullWidthBox>
        <InputRange
          value={Number.isNaN(inputValue) ? 0 : inputValue}
          onInput={handleInput}
          onMouseUp={handleMouseUp}
        />
      </FullWidthBox>

      {text && (
        <FlexBox justifyContent="space-between">
          <span>
            {text === TextFormats.time
              ? formatTime(convertedCurrentPosition)
              : convertedCurrentPosition}
          </span>
          <span>
            {text === TextFormats.time
              ? formatTime(convertedTotalLength)
              : convertedTotalLength}
          </span>
        </FlexBox>
      )}
    </ProgressGroup>
  );
};

export default Progress;
