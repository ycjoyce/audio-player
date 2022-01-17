import { Dispatch, SetStateAction, ReactNode } from "react";
import { audioSrcType } from "../components/Player/Player";
/** 播放模式 */
export interface Mode {
    title?: string;
    content: ReactNode;
    repeat: boolean;
    trackIndexes: number[];
}
export interface Modes {
    /** 當前播放模式索引 */
    currentModeIndex: number;
    /** 改變播放模式時的曲目索引 */
    trackIdxWhenModeChanged: number;
    /** 播放模式列表 */
    modes: Mode[];
    /** 當前播放模式 */
    mode: Mode;
    /** 設定當前播放模式索引 */
    setCurrentModeIndex: Dispatch<SetStateAction<number>>;
    /** 控制模式切換 */
    handleChangeMode(): void;
}
/**
 * 播放模式相關操作
 * @param currentTrackIndex 目前曲目索引
 * @param tracks 曲目列表
 * @returns
 */
declare const useModes: (currentTrackIndex: number, tracks: audioSrcType[]) => Modes;
export default useModes;
