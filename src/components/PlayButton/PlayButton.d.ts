import { FC, ReactNode } from "react";
export interface PlayButtonProps {
    /** 目前是否正在播放 */
    playing: boolean;
    /** 按鈕要顯示的內容 */
    content?: {
        toPlay: ReactNode;
        toPause: ReactNode;
    };
    /**
     * 處理播放按鈕的點擊事件
     * @param toPlay 要播放或暫停
     */
    onClick(toPlay: boolean): void;
}
/**
 * 播放按鈕
 * @param param0
 * @returns
 */
declare const PlayButton: FC<PlayButtonProps>;
export default PlayButton;
