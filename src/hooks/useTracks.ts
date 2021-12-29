import { useState, useEffect, Dispatch, SetStateAction } from "react";

import usePrevious from "./usePrevious";

function useTracks(): {
  currentTrackIndex: number;
  currentModeIndex: number;
  trackIdxWhenModeChanged: number;
  setCurrentTrackIndex: Dispatch<SetStateAction<number>>;
  setCurrentModeIndex: Dispatch<SetStateAction<number>>;
} {
  // 現在曲目索引
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  // 現在播放模式索引
  const [currentModeIndex, setCurrentModeIndex] = useState<number>(0);
  // 上一次 render 時的播放模式索引
  const prevModeIndex = usePrevious(currentModeIndex);
  // 播放模式改變時的曲目索引
  const [trackIdxWhenModeChanged, setTrackIdxWhenModeChanged] = useState<
    number
  >(0);

  useEffect(() => {
    // 擷取當播放模式改變時當下的曲目索引
    if (currentModeIndex !== prevModeIndex) {
      setTrackIdxWhenModeChanged(currentTrackIndex);
    }
  }, [currentModeIndex, prevModeIndex, currentTrackIndex]);

  return {
    currentTrackIndex,
    currentModeIndex,
    trackIdxWhenModeChanged,
    setCurrentTrackIndex,
    setCurrentModeIndex,
  };
}

export default useTracks;
