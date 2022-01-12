import React, { FC, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import useTracks from "../../hooks/useTracks";
import useLoading from "../../hooks/useLoading";
import { getTopTracks, getAlbumData } from "../../apis";
import { Directions } from "../../models";
import Player, { audioSrcType } from "../Player/Player";
import theme from "../../styled-components/abstract/theme";
import GlobalStyle from "../../styled-components/components/Global";

import { StyledPlayerBox } from "./App.style";
import Button from "../../styled-components/components/Button";
import Loading from "../Loading/Loading";

/**
 * App 元件
 * @returns
 */
const App: FC = () => {
  const { loading, setLoading } = useLoading();

  /** 曲目列表、播放模式列表 */
  const {
    autoPlay,
    tracks,
    currentTrackIndex,
    mode,
    setAutoPlay,
    setTracks,
    setCurrentTrackIndex,
    handleChangeMode,
  } = useTracks();

  /**
   * 處理曲目切換
   * @param direction 上一首或下一首
   */
  const handleChangeSong = (direction: keyof typeof Directions): void => {
    const { repeat, trackIndexes } = mode;
    /** 當前曲目索引在模式的曲目索引列表中的索引 */
    let targetIndex = trackIndexes.indexOf(currentTrackIndex);

    switch (direction) {
      case Directions.prev:
        // 如果已經是第一首歌，將 autoplay 設為 false
        setAutoPlay(!(targetIndex === 0 && !repeat));
        if (targetIndex === 0 && repeat) {
          // 如果已經是第一首歌，且要循環，則跳到最後一首歌
          targetIndex = trackIndexes[trackIndexes.length - 1];
        } else if (targetIndex > 0) {
          // 跳到前一首歌
          targetIndex -= 1;
        }
        break;
      case Directions.next:
        // 如果已經是最後一首歌，將 autoplay 設為 false
        setAutoPlay(!(targetIndex === trackIndexes.length - 1 && !repeat));
        if (targetIndex === trackIndexes.length - 1 && repeat) {
          // 如果已經是最後一首歌，且要循環，則跳到第一首歌
          targetIndex = 0;
        } else if (targetIndex < trackIndexes.length - 1) {
          // 跳到下一首歌
          targetIndex += 1;
        }
        break;
      default:
        break;
    }

    setCurrentTrackIndex(trackIndexes[targetIndex]);
  };

  useEffect(() => {
    setLoading(true);

    /**
     * 取得曲目列表
     * @returns
     */
    const getTracks = async (): Promise<audioSrcType[]> => {
      /** 排名前 10 的曲目 */
      const {
        data: { tracks: topTracks },
      } = await getTopTracks(10);

      /** 排名前 10 的曲目的專輯資料 */
      const albumsData = await Promise.all(
        (topTracks as { albumId: string }[]).map(({ albumId }) =>
          getAlbumData(albumId)
        )
      );

      /** 所需格式的資料 */
      const result = (topTracks as {
        name: string;
        artistName: string;
        previewURL: string;
      }[]).map(({ name, artistName, previewURL }, i) => ({
        name,
        artist: artistName,
        url: previewURL,
        img: albumsData[i].data.images[0].url,
      }));

      return Promise.resolve(result);
    };

    getTracks()
      .then(res => setTracks(res))
      .finally(() => setLoading(false));
  }, [setTracks, setLoading]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <StyledPlayerBox>
        {loading && <Loading />}

        {tracks.length > 0 && (
          <Player
            audioSrc={tracks[currentTrackIndex]}
            autoPlay={autoPlay}
            controls={{
              changeSong: handleChangeSong,
              jumpGap: 5,
              changeRates: [1, 1.2, 1.5, 2],
              sleep: [
                { text: "off", minutes: 0 },
                { text: "5秒", minutes: 1 / 12 },
                { text: "10秒", minutes: 1 / 6 },
                { text: "20秒", minutes: 1 / 3 },
                { text: "30秒", minutes: 1 / 2 },
                { text: "1分鐘", minutes: 1 },
              ],
              changeMode: (
                <Button title={mode.title} onClick={handleChangeMode}>
                  {mode.content}
                </Button>
              ),
            }}
          />
        )}
      </StyledPlayerBox>
    </ThemeProvider>
  );
};

export default App;
