import React, {
  useMemo,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

import usePrevious from "./usePrevious";
import shuffleArray from "../utils/shuffleArray";
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
const useModes = (currentTrackIndex: number, tracks: audioSrcType[]): Modes => {
  /** 現在播放模式索引 */
  const [currentModeIndex, setCurrentModeIndex] = useState<number>(0);
  /** 上一次 render 時的播放模式索引 */
  const prevModeIndex = usePrevious(currentModeIndex);
  /** 播放模式改變時的曲目索引 */
  const [trackIdxWhenModeChanged, setTrackIdxWhenModeChanged] = useState<
    number
  >(0);

  useEffect(() => {
    // 擷取當播放模式改變時當下的曲目索引
    if (currentModeIndex !== prevModeIndex) {
      setTrackIdxWhenModeChanged(currentTrackIndex);
    }
  }, [currentModeIndex, prevModeIndex, currentTrackIndex]);

  /** 播放模式 */
  const modes: Mode[] = useMemo(
    () => [
      {
        title: "整張播放",
        content: <i className="fas fa-long-arrow-alt-right" />,
        repeat: false,
        trackIndexes: tracks.map((_, i) => i),
      },
      {
        title: "整張隨機",
        content: <i className="fas fa-random" />,
        repeat: false,
        trackIndexes: [
          trackIdxWhenModeChanged,
          ...shuffleArray(
            tracks.map((_, i) => i).filter(i => i !== trackIdxWhenModeChanged)
          ),
        ],
      },
      {
        title: "整張循環",
        content: <i className="fas fa-retweet" />,
        repeat: true,
        trackIndexes: tracks.map((_, i) => i),
      },
      {
        title: "單曲循環",
        content: <i className="fas fa-exchange-alt" />,
        repeat: true,
        trackIndexes: new Array(tracks.length).fill(trackIdxWhenModeChanged),
      },
    ],
    [trackIdxWhenModeChanged, tracks]
  );

  /** 處理播放模式改變 */
  const handleChangeMode = (): void => {
    setCurrentModeIndex(idx => (idx + 1 > modes.length - 1 ? 0 : idx + 1));
  };

  return {
    currentModeIndex,
    trackIdxWhenModeChanged,
    modes,
    mode: modes[currentModeIndex],
    setCurrentModeIndex,
    handleChangeMode,
  };
};

export default useModes;
