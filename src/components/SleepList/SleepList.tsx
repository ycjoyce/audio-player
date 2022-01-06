import React, { FC, Dispatch, SetStateAction, MouseEvent } from "react";

import { sleepOption } from "../../models";

import { ListItem } from "../../styled-components/components/List";
import { StyledSleepList } from "../../styled-components/components/SleepGroup";

export interface SleepListProps {
  /** 睡眠模式的選項 */
  options: sleepOption[];
  /** 被選到的選項 */
  checkedOption: number;
  /** 選擇選項的方法 */
  setCheckedOption: Dispatch<SetStateAction<number>>;
}

/**
 * 設定睡眠模式的列表
 * @param param0
 * @returns
 */
const SleepList: FC<SleepListProps> = ({
  options,
  checkedOption,
  setCheckedOption,
}) => {
  /**
   * 處理選項的點擊事件
   * @param e
   */
  const handleItemClick = (e: MouseEvent): void => {
    const { target } = e;
    if (!(target instanceof HTMLLIElement)) {
      return;
    }
    if (target.dataset && target.dataset.minutes) {
      setCheckedOption(+target.dataset.minutes);
    }
  };

  return (
    <StyledSleepList onClick={handleItemClick}>
      {options.map(({ text, minutes }) => (
        <ListItem
          key={text}
          data-minutes={minutes}
          clickable
          className={`${minutes === checkedOption ? "active" : ""}`}
        >
          {text}
        </ListItem>
      ))}
    </StyledSleepList>
  );
};

export default SleepList;
