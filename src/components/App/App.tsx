import React, { FC, ReactNode, useMemo, useState } from "react";

import useTracks from "../../hooks/useTracks";
import { Directions, audioSrc } from "../../models";
import shuffleArray from "../../utils/shuffleArray";

import Button from "../../styled-components/components/Button";
import Player from "../Player/Player";

const App: FC = () => {
  const {
    currentTrackIndex,
    currentModeIndex,
    trackIdxWhenModeChanged,
    setCurrentTrackIndex,
    setCurrentModeIndex,
  } = useTracks();

  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  // 曲目列表
  const tracks: audioSrc[] = useMemo(
    () => [
      {
        name: "SoundHelix Song 1",
        artist: "T. Schürger",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        name: "SoundHelix Song 2",
        artist: "T. Schürger",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      },
      {
        name: "SoundHelix Song 3",
        artist: "T. Schürger",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      },
      {
        name: "SoundHelix Song 4",
        artist: "T. Schürger",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        name: "SoundHelix Song 5",
        artist: "T. Schürger",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      },
      {
        name: "SoundHelix Song 6",
        artist: "T. Schürger",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      },
    ],
    []
  );

  // 播放模式列表
  const modes: {
    title?: string;
    content: ReactNode;
    repeat: boolean;
    trackIndexes: number[];
  }[] = useMemo(
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

  /**
   * 處理曲目切換
   * @param direction 上一首或下一首
   */
  const handleChangeSong = (direction: keyof typeof Directions): void => {
    const { repeat, trackIndexes } = modes[currentModeIndex];
    let targetIndex = trackIndexes.indexOf(currentTrackIndex);

    switch (direction) {
      case Directions.prev:
        setAutoPlay(!(targetIndex === 0 && !repeat));
        if (targetIndex === 0 && repeat) {
          targetIndex = trackIndexes[trackIndexes.length - 1];
        } else if (targetIndex > 0) {
          targetIndex -= 1;
        }
        break;
      case Directions.next:
        setAutoPlay(!(targetIndex === trackIndexes.length - 1 && !repeat));
        if (targetIndex === trackIndexes.length - 1 && repeat) {
          targetIndex = 0;
        } else if (targetIndex < trackIndexes.length - 1) {
          targetIndex += 1;
        }
        break;
      default:
        break;
    }
    setCurrentTrackIndex(trackIndexes[targetIndex]);
  };

  /**
   * 處理播放模式改變
   */
  const handleChangeMode = (): void => {
    setCurrentModeIndex(idx => (idx + 1 > modes.length - 1 ? 0 : idx + 1));
  };

  return (
    <div>
      <Player
        audioSrc={tracks[currentTrackIndex]}
        autoPlay={autoPlay}
        controls={{
          changeSong: handleChangeSong,
          jumpGap: 10,
          changeRates: [1, 1.2, 1.5, 2],
          sleep: [
            { text: "off", minutes: 0 },
            { text: "5分鐘", minutes: 5 },
            { text: "10分鐘", minutes: 10 },
            { text: "15分鐘", minutes: 15 },
            { text: "30分鐘", minutes: 30 },
            { text: "45分鐘", minutes: 45 },
            { text: "1小時", minutes: 60 },
            { text: "2小時", minutes: 120 },
            { text: "3小時", minutes: 180 },
            { text: "4小時", minutes: 240 },
          ],
          changeMode: (
            <Button
              title={modes[currentModeIndex].title}
              onClick={handleChangeMode}
            >
              {modes[currentModeIndex].content}
            </Button>
          ),
        }}
      />
    </div>
  );
};

export default App;
