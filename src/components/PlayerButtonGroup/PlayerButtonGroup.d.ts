import { FC } from "react";
import { Controls, audioType } from "../Player/Player";
import { Directions } from "../../models";
export interface PlayerButtonGroupProps extends Controls {
    /** 音訊元素 */
    audioElement: audioType;
    /** 是否正在播放 */
    playing: boolean;
    /** 切換播放 / 暫停 */
    togglePlay(audio: audioType, toPlay: boolean): void;
    /** 切換曲目 */
    handleSongChange(audio: audioType, direction: keyof typeof Directions): void;
}
/**
 * 播放器按鈕
 * @param param0
 * @returns
 */
declare const PlayerButtonGroup: FC<PlayerButtonGroupProps>;
export default PlayerButtonGroup;
