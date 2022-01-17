import { FC } from "react";
/** 睡眠模式選項 */
export declare type sleepOption = {
    /** 顯示文字 */
    text: string;
    /** 幾分鐘後暫停 */
    minutes: number;
};
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
declare const SleepGroup: FC<SleepGroupProps>;
export default SleepGroup;
