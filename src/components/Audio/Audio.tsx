import React, { SyntheticEvent, forwardRef, Ref } from "react";

interface Props {
  /** 音訊來源 */
  src: string;
  /** 是否自動播放 */
  autoPlay?: boolean;
  /**
   * 音訊來源載入完成的事件處理
   * @param e
   */
  onLoadedMetadata?(e: SyntheticEvent): void;
  /**
   * 音訊播放時的事件處理
   * @param e
   */
  onPlay?(e: SyntheticEvent): void;
  /**
   * 音訊暫停時的事件處理
   * @param e
   */
  onPause?(e: SyntheticEvent): void;
  /**
   * 音訊結束時的事件處理
   * @param e
   */
  onEnded?(e: SyntheticEvent): void;
  /**
   * 音訊播放時間更新的事件處理
   * @param e
   */
  onTimeUpdate?(e: SyntheticEvent): void;
  /**
   * 音訊可以播放時的事件處理
   * @param e
   */
  onCanPlay?(e: SyntheticEvent): void;
}

/** 音訊元件 */
const Audio = forwardRef(
  (
    {
      src,
      autoPlay = false,
      onLoadedMetadata = () => {},
      onPlay = () => {},
      onPause = () => {},
      onEnded = () => {},
      onTimeUpdate = () => {},
      onCanPlay = () => {},
    }: Props,
    ref: Ref<HTMLAudioElement>
  ) => (
    <audio
      data-testid="audio"
      ref={ref}
      src={src}
      autoPlay={autoPlay}
      onLoadedMetadata={onLoadedMetadata}
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onCanPlay={onCanPlay}
    />
  )
);

export default Audio;
