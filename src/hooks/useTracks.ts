import React, { useState, Dispatch, SetStateAction } from "react";

import { audioSrc } from "../models";

/**
 * 曲目列表操作
 * @returns
 */
function useTracks(): {
  tracks: audioSrc[];
  currentTrackIndex: number;
  setTracks: Dispatch<SetStateAction<audioSrc[]>>;
  setCurrentTrackIndex: Dispatch<SetStateAction<number>>;
} {
  // 曲目列表
  const [tracks, setTracks] = useState<audioSrc[]>([]);
  // 當前播放的曲目索引
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  return {
    tracks,
    currentTrackIndex,
    setCurrentTrackIndex,
    setTracks,
  };
}

export default useTracks;
