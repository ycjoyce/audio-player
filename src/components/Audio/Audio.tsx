import React, { SyntheticEvent, forwardRef, Ref } from "react";

interface Props {
  /**
   * 音訊來源
   */
  src: string;
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
  onCanPlay?(e: SyntheticEvent): void;
}

/**
 * 音訊
 */
const Audio = forwardRef(
  (
    {
      src,
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
