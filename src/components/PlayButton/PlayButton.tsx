import React, { FC, ReactNode } from "react";

import Button from "../../styled-components/components/Button";

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
const PlayButton: FC<PlayButtonProps> = ({
  playing,
  content = { toPlay: "播放", toPause: "暫停" },
  onClick,
}) => (
  <Button title={playing ? "暫停" : "播放"} onClick={() => onClick(!playing)}>
    {playing ? content.toPause : content.toPlay}
  </Button>
);

export default PlayButton;
