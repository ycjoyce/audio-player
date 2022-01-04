import React, { useState, Dispatch, SetStateAction } from "react";

import useModes from "./useModes";
import { audioSrc, Mode } from "../models";

/**
 * 曲目列表、播放模式操作
 * @returns
 */
function useTracks(): {
  // 是否自動播放
  autoPlay: boolean;
  // 設定自動播放
  setAutoPlay: Dispatch<SetStateAction<boolean>>;

  // 曲目列表
  tracks: audioSrc[];
  // 當前播放的曲目索引
  currentTrackIndex: number;
  // 設定曲目列表
  setTracks: Dispatch<SetStateAction<audioSrc[]>>;
  // 設定當前播放的曲目索引
  setCurrentTrackIndex: Dispatch<SetStateAction<number>>;

  // 當前播放模式索引
  currentModeIndex: number;
  // 改變播放模式時的曲目索引
  trackIdxWhenModeChanged: number;
  // 播放模式列表
  modes: Mode[];
  // 當前播放模式
  mode: Mode;
  // 設定當前播放模式索引
  setCurrentModeIndex: Dispatch<SetStateAction<number>>;
  // 控制模式切換
  handleChangeMode(): void;
} {
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [tracks, setTracks] = useState<audioSrc[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  return {
    autoPlay,
    tracks,
    currentTrackIndex,
    setAutoPlay,
    setCurrentTrackIndex,
    setTracks,
    ...useModes(currentTrackIndex, tracks),
  };
}

export default useTracks;
