import { FC, ReactNode } from "react";
import { Directions } from "../../models";
import { sleepOption } from "../SleepGroup/SleepGroup";
/** 音源資料 */
export declare type audioSrcType = {
    /** 曲目名稱 */
    name?: string;
    /** 藝術家 */
    artist?: string;
    /** 專輯封面 */
    img?: string;
    /** 音源網址 */
    url: string;
};
export interface PlayerProps {
    /** 音訊來源 */
    audioSrc?: audioSrcType;
    /** 要從哪個位置開始播（單位：秒） */
    startSec?: number;
    /** 是否自動開始播放 */
    autoPlay?: boolean;
    /** 控制功能 */
    controls?: Controls;
}
export interface Controls {
    /** 切換上下首歌的方法 */
    changeSong?(direction: keyof typeof Directions): void;
    /** 跳至前/後指定位置（單位：秒） */
    jumpGap?: number;
    /** 倍速播放（單位：倍） */
    changeRates?: number[];
    /** text - 顯示的選項文字 / minutes - 幾分鐘後暫停播放 */
    sleep?: sleepOption[];
    /** 播放模式 */
    changeMode?: ReactNode;
}
/** audio 元素 */
export declare type audioType = HTMLAudioElement | null;
/**
 * 播放器
 * @param param0
 * @returns
 */
declare const Player: FC<PlayerProps>;
export default Player;
