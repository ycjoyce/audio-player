import React, { FC, useState, useRef } from "react";

import { Controls, audioType } from "../Player/Player";
import { Directions } from "../../models";

import {
  PlayerButtonGroup as StyledPlayerButtonGroup,
  PlayerButtons,
} from "../../styled-components/components/Player";
import JumpButton from "../JumpButton/JumpButton";
import ChangeSongButton from "../ChangeSongButton/ChangeSongButton";
import PlayButton from "../PlayButton/PlayButton";
import RateButton from "../RateButton/RateButton";
import SleepGroup from "../SleepGroup/SleepGroup";

export interface PlayerButtonGroupProps extends Controls {
  /** 音訊元素 */
  audioElement: audioType;
  /** 是否正在播放 */
  playing: boolean;
  /** 切換播放 / 暫停 */
  togglePlay(audio: audioType, toPlay: boolean): void;
  /** 切換曲目 */
  handleSongChange(audio: audioType, direction: keyof typeof Directions): void;
}

/**
 * 播放器按鈕
 * @param param0
 * @returns
 */
const PlayerButtonGroup: FC<PlayerButtonGroupProps> = ({
  audioElement,
  playing,
  jumpGap,
  sleep,
  changeRates,
  changeMode,
  changeSong,
  togglePlay,
  handleSongChange,
}) => {
  const [sleepUpdated, setSleepUpdated] = useState<boolean>(false);
  const sleepTimer = useRef<null | NodeJS.Timeout>(null);

  /**
   * 處理跳至間隔秒數
   * @param audio
   * @param direction 方向（前或後）
   * @param gap 間隔（單位：秒）
   */
  const handleJump = (
    audio: HTMLAudioElement | null,
    direction: keyof typeof Directions,
    gap: number
  ): void => {
    if (!audio) {
      return;
    }
    const copiedAudio = audio;
    if (direction === Directions.prev) {
      copiedAudio.currentTime -= gap;
    } else {
      copiedAudio.currentTime += gap;
    }
  };

  /**
   * 處理播放速度改變
   * @param audio
   * @param rate 播放速度（倍數）
   */
  const handleRateChange = (
    audio: HTMLAudioElement | null,
    rate: number
  ): void => {
    if (!audio) {
      return;
    }
    const copiedAudio = audio;
    copiedAudio.playbackRate = rate;
    copiedAudio.addEventListener("loadedmetadata", () => {
      copiedAudio.playbackRate = rate;
    });
  };

  /**
   * 處理睡眠模式改變
   * @param audio
   * @param minutes 幾分鐘後暫停播放
   */
  const handleSleepChange = (
    audio: HTMLAudioElement | null,
    minutes: number
  ): void => {
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

  return (
    <StyledPlayerButtonGroup>
      <PlayerButtons level="main">
        {jumpGap && (
          <JumpButton
            direction={Directions.prev}
            gap={jumpGap || 0}
            onJump={(...args) => handleJump(audioElement, ...args)}
          >
            <i className="fas fa-undo-alt" />
          </JumpButton>
        )}

        {changeSong && (
          <ChangeSongButton
            direction={Directions.prev}
            onChange={direction => handleSongChange(audioElement, direction)}
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
          onClick={toPlay => togglePlay(audioElement, toPlay)}
        />

        {changeSong && (
          <ChangeSongButton
            direction={Directions.next}
            onChange={direction => handleSongChange(audioElement, direction)}
          >
            <i className="fas fa-forward" />
          </ChangeSongButton>
        )}

        {jumpGap && (
          <JumpButton
            direction={Directions.next}
            gap={jumpGap || 0}
            onJump={(...args) => handleJump(audioElement, ...args)}
          >
            <i className="fas fa-redo-alt" />
          </JumpButton>
        )}
      </PlayerButtons>

      <PlayerButtons level="sub">
        {changeMode}

        {changeRates && (
          <RateButton
            rates={changeRates}
            onUpdate={rate => handleRateChange(audioElement, rate)}
          />
        )}

        {sleep && (
          <SleepGroup
            options={sleep}
            updated={sleepUpdated}
            onUpdate={minutes => handleSleepChange(audioElement, minutes)}
          >
            <i className="fas fa-hourglass-half" />
          </SleepGroup>
        )}
      </PlayerButtons>
    </StyledPlayerButtonGroup>
  );
};

export default PlayerButtonGroup;
