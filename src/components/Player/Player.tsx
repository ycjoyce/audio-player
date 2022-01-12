import React, {
  FC,
  useState,
  useRef,
  SyntheticEvent,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

import usePrevious from "../../hooks/usePrevious";
import useLoading from "../../hooks/useLoading";
import { Directions } from "../../models";
import { sleepOption } from "../SleepGroup/SleepGroup";

import Progress, { TextFormats } from "../Progress/Progress";
import { PlayerSection } from "../../styled-components/components/Player";
import TrackTitle from "../TrackTitle/TrackTitle";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Empty from "../Empty/Empty";
import PlayerButtonGroup from "../PlayerButtonGroup/PlayerButtonGroup";

/** 音源資料 */
export type audioSrcType = {
  /** 曲目名稱 */
  name?: string;
  /** 藝術家 */
  artist?: string;
  /** 專輯封面 */
  img?: string;
  /** 音源網址 */
  url: string;
};

export interface PlayerProps {
  /** 音訊來源 */
  audioSrc?: audioSrcType;
  /** 要從哪個位置開始播（單位：秒） */
  startSec?: number;
  /** 是否自動開始播放 */
  autoPlay?: boolean;
  /** 控制功能 */
  controls?: Controls;
}

export interface Controls {
  /** 切換上下首歌的方法 */
  changeSong?(direction: keyof typeof Directions): void;
  /** 跳至前/後指定位置（單位：秒） */
  jumpGap?: number;
  /** 倍速播放（單位：倍） */
  changeRates?: number[];
  /** text - 顯示的選項文字 / minutes - 幾分鐘後暫停播放 */
  sleep?: sleepOption[];
  /** 播放模式 */
  changeMode?: ReactNode;
}

/** audio 元素 */
export type audioType = HTMLAudioElement | null;

/**
 * 播放器
 * @param param0
 * @returns
 */
const Player: FC<PlayerProps> = ({
  audioSrc = { name: "", artist: "", img: "", url: "" },
  startSec = 0,
  autoPlay = false,
  controls = {},
}) => {
  const { name, artist, img, url } = audioSrc;
  const prevName = usePrevious(name);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const prevStartSec = usePrevious(startSec);

  const [progressUpdated, setProgressUpdated] = useState<boolean>(false);

  const { loading, handleLoadingStatus } = useLoading();
  const [error, setError] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);

  /**
   * 播放音訊
   * @param audio
   */
  const play = (audio: audioType): void => {
    if (!audio) {
      return;
    }
    audio.play();
  };

  /**
   * 暫停音訊
   * @param audio
   */
  const pause = (audio: audioType): void => {
    if (!audio) {
      return;
    }
    audio.pause();
  };

  /**
   * 切換播放/暫停
   * @param audio
   * @param toPlay 要播放或暫停
   * @returns
   */
  const togglePlay = (audio: audioType, toPlay: boolean): void => {
    if (!audio) {
      return;
    }
    const action = toPlay ? play : pause;
    action(audio);
  };

  /**
   * 切換音訊播放進度至指定位置
   * @param audio
   * @param position 指定位置
   */
  const setPosition = (audio: audioType, position: number): void => {
    if (!audio) {
      return;
    }
    const copiedAudio = audio;
    const convertedPosition =
      position > audio.duration ? audio.duration : position;
    copiedAudio.currentTime = convertedPosition;
  };

  /**
   * 切換 loading 並設定指定位置
   * @param audio
   * @param position 指定位置
   */
  const handleSetPosition = useCallback(
    (audio: audioType, position: number): void => {
      if (!audio) {
        return;
      }
      const clearLoading = handleLoadingStatus(500);
      setPosition(audio, position);
      audio.addEventListener("timeupdate", () => {
        clearLoading();
      });
    },
    [handleLoadingStatus]
  );

  /**
   * 初始化播放設定
   * @param audio
   */
  const initPlayingSettings = (audio: audioType): void => {
    if (!audio) {
      return;
    }
    const copiedAudio = audio;
    // 設定全長
    setAudioDuration(copiedAudio.duration);
    // 設定開始時間
    handleSetPosition(copiedAudio, startSec);
  };

  /**
   * 處理音源載入完成
   * @param e
   */
  const handleAudioLoadedMetadata = (e: SyntheticEvent): void => {
    const audio = e.target as HTMLAudioElement;
    initPlayingSettings(audio);
  };

  /**
   * 處理音源播放時間更新
   * @param e
   */
  const handleAudioTimeUpdate = (e: SyntheticEvent): void => {
    const audio = e.currentTarget as HTMLAudioElement;
    setAudioCurrentTime(audio.currentTime);
  };

  /**
   * 處理歌曲切換
   * @param audio
   * @param direction
   */
  const handleSongChange = (
    audio: HTMLAudioElement | null,
    direction: keyof typeof Directions
  ): void => {
    if (!audio) {
      return;
    }
    if (controls.changeSong instanceof Function) {
      controls.changeSong(direction);
    }
    if (prevName === name) {
      initPlayingSettings(audio);
    }
  };

  /**
   * 處理音源暫停/結束
   * @param audio
   * @param ended 音源是否已經結束
   */
  const handleAudioStop = (audio: audioType, ended = false): void => {
    if (!audio) {
      return;
    }
    setPlaying(false);
    if (ended && controls.changeSong) {
      // 如果已經結束且有要切歌的話，切到下一首
      handleSongChange(audio, Directions.next);
    }
  };

  /**
   * 處理進度條更新
   * @param audio
   * @param position 進度條位置
   */
  const handleProgressUpdate = (audio: audioType, position: number): void => {
    if (!audio) {
      return;
    }
    handleSetPosition(audio, position);
    setProgressUpdated(false);
  };

  /** 處理音源錯誤 */
  const handleAudioError = (): void => {
    if (!url) return;
    setPlaying(false);
    setError(true);
  };

  /** 處理音源seeked */
  const handleAudioSeeked = (): void => {
    setProgressUpdated(true);
  };

  /** 處理音源播放 */
  const handleAudioPlay = (): void => {
    setPlaying(true);
  };

  /** 處理音源開始載入 */
  const handleAudioLoadStart = (): void => {
    setError(false);
  };

  /**
   * 以當前狀態渲染主要內容
   * @param audio
   * @param isError
   * @param isEmpty
   * @returns 主要內容
   */
  const renderContent = (
    audio: audioType,
    isError: boolean,
    isEmpty: boolean
  ): JSX.Element => {
    if (isError) {
      return <Error />;
    }
    if (isEmpty) {
      return <Empty />;
    }
    return (
      <>
        <PlayerSection>
          <TrackTitle name={name} artist={artist} img={img} />
        </PlayerSection>

        <PlayerSection disabled={!url}>
          <Progress
            totalLength={audioDuration}
            currentPosition={audioCurrentTime}
            text={TextFormats.time}
            updated={progressUpdated}
            onUpdate={position => handleProgressUpdate(audio, position)}
          />

          <PlayerButtonGroup
            {...controls}
            audioElement={audio}
            playing={playing}
            togglePlay={togglePlay}
            handleSongChange={handleSongChange}
          />
        </PlayerSection>
      </>
    );
  };

  useEffect(() => {
    // 每當 startSec 變動重新設定音訊播放進度至指定位置
    if (
      prevStartSec === undefined || // 初次載入
      prevStartSec === startSec || // startSec 沒有變動
      error || // 錯誤發生
      !url // url 為空
    ) {
      return;
    }
    handleSetPosition(audioRef.current, startSec);
  }, [startSec, prevStartSec, error, url, handleSetPosition]);

  useEffect(() => {
    // 判斷 url 是否為空
    setEmpty(!url);
  }, [url]);

  return (
    <div data-testid="player">
      {loading && <Loading />}

      <audio
        data-testid="audio"
        ref={audioRef}
        src={url}
        autoPlay={autoPlay}
        onLoadStart={handleAudioLoadStart}
        onLoadedMetadata={handleAudioLoadedMetadata}
        onTimeUpdate={handleAudioTimeUpdate}
        onPlay={handleAudioPlay}
        onPause={({ target: audio }) =>
          handleAudioStop(audio as HTMLAudioElement, false)
        }
        onEnded={({ target: audio }) =>
          handleAudioStop(audio as HTMLAudioElement, true)
        }
        onSeeked={handleAudioSeeked}
        onError={handleAudioError}
      />

      {renderContent(audioRef.current, error, empty)}
    </div>
  );
};

export default Player;
