import { FC } from "react";
/** 文字格式 */
export declare enum TextFormats {
    time = "time",
    original = "original"
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
declare const Progress: FC<ProgressProps>;
export default Progress;
