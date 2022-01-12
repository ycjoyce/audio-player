import { useState, Dispatch, SetStateAction } from "react";

import useModes, { Modes } from "./useModes";
import { audioSrcType } from "../components/Player/Player";

export interface Tracks extends Modes {
  /** 是否自動播放 */
  autoPlay: boolean;
  /** 設定自動播放 */
  setAutoPlay: Dispatch<SetStateAction<boolean>>;
  /** 曲目列表 */
  tracks: audioSrcType[];
  /** 當前播放的曲目索引 */
  currentTrackIndex: number;
  /** 設定曲目列表 */
  setTracks: Dispatch<SetStateAction<audioSrcType[]>>;
  /** 設定當前播放的曲目索引 */
  setCurrentTrackIndex: Dispatch<SetStateAction<number>>;
}

/**
 * 曲目列表、播放模式操作
 * @returns
 */
const useTracks = (): Tracks => {
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [tracks, setTracks] = useState<audioSrcType[]>([]);
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
};

export default useTracks;
