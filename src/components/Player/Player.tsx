import React, {
  FC,
  useState,
  useRef,
  SyntheticEvent,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

import usePrevious from "../../hooks/usePrevious";
import {
  sleepOption,
  audioSrc as audioSrcType,
  Directions,
  TextFormats,
} from "../../models";

import Audio from "../Audio/Audio";
import Progress from "../Progress/Progress";
import PlayButton from "../PlayButton/PlayButton";
import RateButton from "../RateButton/RateButton";
import SleepGroup from "../SleepGroup/SleepGroup";
import TrackTitle from "../TrackTitle/TrackTitle";
import ChangeSongButton from "../ChangeSongButton/ChangeSongButton";
import JumpButton from "../JumpButton/JumpButton";
import {
  PlayerButtonGroup,
  PlayerButtons,
  PlayerSection,
} from "../../styled-components/components/Player";
import theme from "../../styled-components/abstract/theme";
import { GlobalStyle } from "../../styled-components/components/Global";

export interface Props {
  /** 音訊來源 */
  audioSrc?: audioSrcType;
  /** 要從哪個位置開始播（單位：秒） */
  startSec?: number;
  /** 是否自動開始播放 */
  autoPlay?: boolean;
  /**
   *  要顯示哪些控制功能
   *  changeSong: 切換上下首歌的方法
   *  jumpGap: 跳至前/後指定位置（單位：秒）
   *  changeRates: 倍速播放（單位：倍）
   *  sleep: text - 顯示的選項文字 / minutes - 幾分鐘後暫停播放
   */
  controls?: {
    changeSong?(direction: keyof typeof Directions): void;
    jumpGap?: number;
    changeRates?: number[];
    sleep?: sleepOption[];
    changeMode?: ReactNode;
  };
}

/**
 * 播放器
 * @param param0
 * @returns
 */
const Player: FC<Props> = ({
  audioSrc = { name: "", artist: "", img: "", url: "" },
  startSec = 0,
  autoPlay = false,
  controls = {},
}) => {
  const { name, artist, img, url } = audioSrc;
  /** 上一次 render 時的音源名稱 */
  const prevName = usePrevious(name);

  /** audio 元素 */
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioCanPlay, setAudioCanPlay] = useState<boolean>(false);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);

  const [progressUpdated, setProgressUpdated] = useState<boolean>(false);
  const [sleepUpdated, setSleepUpdated] = useState<boolean>(false);
  const sleepTimer = useRef<null | NodeJS.Timeout>(null);

  /**
   * 播放音訊
   * @param audio
   */
  const play = (audio: HTMLAudioElement): void => {
    audio.play();
  };

  /**
   * 暫停音訊
   * @param audio
   */
  const pause = (audio: HTMLAudioElement): void => {
    audio.pause();
  };

  /**
   * 切換播放/暫停
   * @param toPlay 要播放或暫停
   */
  const togglePlay = useCallback((toPlay: boolean): void => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    const action = toPlay ? play : pause;
    action(audio);
  }, []);

  /**
   * 初始化播放設定
   */
  const initPlayingSettings = useCallback(
    (audio: HTMLAudioElement): void => {
      const copiedAudio = audio;
      // 設定全長
      setAudioDuration(copiedAudio.duration);
      // 設定開始時間
      copiedAudio.currentTime = startSec;
    },
    [startSec]
  );

  /**
   * 處理音源載入完成
   */
  const handleAudioLoadedMetadata = (e: SyntheticEvent): void => {
    const audio = e.target as HTMLAudioElement;
    initPlayingSettings(audio);
  };

  /**
   * 處理音源canplay事件
   */
  const handleAudioCanPlay = (): void => {
    setAudioCanPlay(true);
  };

  /**
   * 處理音源播放
   * @param e
   */
  const handleAudioPlay = (): void => {};

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
   * @param direction
   */
  const handleSongChange = useCallback(
    (direction: keyof typeof Directions): void => {
      const audio = audioRef.current;
      if (!audio) {
        return;
      }
      setAudioCanPlay(false);
      if (controls.changeSong instanceof Function) {
        controls.changeSong(direction);
      }
      if (prevName === name) {
        initPlayingSettings(audio);
      }
    },
    [controls, name, prevName, initPlayingSettings]
  );

  /**
   * 處理音源暫停/結束
   * @param ended 音源是否已經結束
   */
  const handleAudioStop = (ended = false): void => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    if (ended && controls.changeSong) {
      // 如果已經結束且有要切歌的話，切到下一首
      handleSongChange(Directions.next);
    }
  };

  /**
   * 處理進度條更新
   * @param position 進度條位置
   */
  const handleProgressUpdate = (position: number): void => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.currentTime = position;
    setProgressUpdated(false);
    audio.onseeked = () => {
      setProgressUpdated(true);
    };
  };

  /**
   * 處理跳至間隔秒數
   * @param direction 方向（前或後）
   * @param gap 間隔（單位：秒）
   */
  const handleJump = (
    direction: keyof typeof Directions,
    gap: number
  ): void => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    if (direction === Directions.prev) {
      audio.currentTime -= gap;
    } else {
      audio.currentTime += gap;
    }
  };

  /**
   * 處理播放速度改變
   * @param rate 播放速度（倍數）
   */
  const handleRateChange = (rate: number): void => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.playbackRate = rate;
    audio.onloadedmetadata = () => {
      audio.playbackRate = rate;
    };
  };

  /**
   * 處理睡眠模式改變
   * @param minutes 幾分鐘後暫停播放
   */
  const handleSleepChange = (minutes: number): void => {
    const audio = audioRef.current;
    setSleepUpdated(false);
    if (sleepTimer.current) {
      clearTimeout(sleepTimer.current);
    }
    if (minutes === 0) {
      return;
    }
    sleepTimer.current = setTimeout(() => {
      setSleepUpdated(true);
      if (audio) {
        audio.pause();
      }
    }, minutes * 60 * 1000);
  };

  useEffect(() => {
    // 判斷自動播放
    togglePlay(autoPlay && audioCanPlay);
  }, [audioCanPlay, autoPlay, togglePlay]);

  useEffect(() => {
    // 判斷是否正在播放
    const audio = audioRef.current;
    if (!audio) return;
    setPlaying(!audio.paused);
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div data-testid="player">
        <PlayerSection>
          <TrackTitle name={name} artist={artist} img={img} />
        </PlayerSection>

        <Audio
          ref={audioRef}
          src={url}
          onLoadedMetadata={handleAudioLoadedMetadata}
          onTimeUpdate={handleAudioTimeUpdate}
          onPlay={handleAudioPlay}
          onPause={() => handleAudioStop(false)}
          onEnded={() => handleAudioStop(true)}
          onCanPlay={handleAudioCanPlay}
        />

        <PlayerSection disabled={!url}>
          <Progress
            totalLength={audioDuration}
            currentPosition={audioCurrentTime}
            text={TextFormats.time}
            updated={progressUpdated}
            onUpdate={handleProgressUpdate}
          />

          <PlayerButtonGroup>
            <PlayerButtons level="main">
              {controls.jumpGap && (
                <JumpButton
                  direction={Directions.prev}
                  gap={controls.jumpGap || 0}
                  onJump={handleJump}
                >
                  <i className="fas fa-undo-alt" />
                </JumpButton>
              )}

              {controls.changeSong && (
                <ChangeSongButton
                  direction={Directions.prev}
                  onChange={handleSongChange}
                >
                  <i className="fas fa-backward" />
                </ChangeSongButton>
              )}

              <PlayButton
                playing={playing}
                content={{
                  toPlay: <i className="far fa-play-circle" />,
                  toPause: <i className="far fa-pause-circle" />,
                }}
                onClick={togglePlay}
              />

              {controls.changeSong && (
                <ChangeSongButton
                  direction={Directions.next}
                  onChange={handleSongChange}
                >
                  <i className="fas fa-forward" />
                </ChangeSongButton>
              )}

              {controls.jumpGap && (
                <JumpButton
                  direction={Directions.next}
                  gap={controls.jumpGap || 0}
                  onJump={handleJump}
                >
                  <i className="fas fa-redo-alt" />
                </JumpButton>
              )}
            </PlayerButtons>

            <PlayerButtons level="sub">
              {controls.changeMode}

              {controls.changeRates && (
                <RateButton
                  rates={controls.changeRates}
                  onUpdate={handleRateChange}
                />
              )}

              {controls.sleep && (
                <SleepGroup
                  options={controls.sleep}
                  updated={sleepUpdated}
                  onUpdate={handleSleepChange}
                >
                  <i className="fas fa-hourglass-half" />
                </SleepGroup>
              )}
            </PlayerButtons>
          </PlayerButtonGroup>
        </PlayerSection>
      </div>
    </ThemeProvider>
  );
};

export default Player;
