import React, { FC, useState, useEffect, useRef } from "react";

import usePrevious from "../../hooks/usePrevious";
import useClickOutside from "../../hooks/useClickOutside";
import { sleepOption } from "../../models";

import Button from "../../styled-components/components/Button";
import { StyledSleepGroup } from "../../styled-components/components/SleepGroup";
import SleepList from "../SleepList/SleepList";

export interface SleepGroupProps {
  /** 睡眠模式的選項 */
  options: sleepOption[];
  /** 是否已經更新完成 */
  updated?: boolean;
  /**
   * 更新睡眠模式的事件處理
   * @param minutes 更新的睡眠模式是幾分鐘
   */
  onUpdate(minutes: number): void;
}

/**
 * 設定睡眠模式
 * @param param0
 * @returns
 */
const SleepGroup: FC<SleepGroupProps> = ({
  options,
  updated,
  children,
  onUpdate,
}) => {
  /** 是否打開選項列表 */
  const [showList, setShowList] = useState<boolean>(false);
  /** 目前備選中的選項 */
  const [checkedOption, setCheckedOption] = useState<number>(
    options[0].minutes
  );
  /** 上一次 render 時被選中的選項 */
  const prevCheckedOption = usePrevious(checkedOption);
  const sleepGroupRef = useRef<HTMLDivElement>(null);

  /**
   * 切換顯示選項列表
   */
  const toggleShowList = (): void => {
    setShowList(show => !show);
  };

  useEffect(() => {
    // 每當選擇的睡眠選項改變，呼叫 onUpdate 並關閉列表
    if (prevCheckedOption !== checkedOption) {
      onUpdate(checkedOption);
      setShowList(false);
    }
  }, [updated, prevCheckedOption, checkedOption, onUpdate]);

  useEffect(() => {
    // 每當更新完成，回到預設選項
    if (updated) {
      setCheckedOption(options[0].minutes);
    }
  }, [updated, options]);

  // 每當點擊外部，關閉睡眠模式列表
  useClickOutside(sleepGroupRef, () => setShowList(false));

  return (
    <StyledSleepGroup ref={sleepGroupRef}>
      <Button title="設定睡眠" onClick={toggleShowList}>
        {children || "設定睡眠"}
      </Button>

      {showList && (
        <SleepList
          options={options}
          checkedOption={checkedOption}
          setCheckedOption={setCheckedOption}
        />
      )}
    </StyledSleepGroup>
  );
};

export default SleepGroup;
