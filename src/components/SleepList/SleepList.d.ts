import { FC, Dispatch, SetStateAction } from "react";
import { sleepOption } from "../SleepGroup/SleepGroup";
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
declare const SleepList: FC<SleepListProps>;
export default SleepList;
