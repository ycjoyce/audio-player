import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Player from "./Player";

describe("Player", () => {
  const audioSrc = {
    name: "Wedding day",
    artist: "John",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  };

  const play = jest
    .spyOn(window.HTMLMediaElement.prototype, "play")
    .mockImplementation(() => Promise.resolve());

  it("should render a Player component", () => {
    const { rerender } = render(<Player audioSrc={audioSrc} />);

    expect(screen.getAllByRole("heading")).toHaveLength(2);
    expect(screen.getByText(audioSrc.name)).toBeInTheDocument();
    expect(screen.getByText(audioSrc.artist)).toBeInTheDocument();
    expect(screen.getByRole("separator")).toBeInTheDocument();

    const audio = screen.getByTestId<HTMLAudioElement>("audio");
    expect(audio).toBeInTheDocument();
    expect(audio.src).toBe(audioSrc.url);

    const playerButton = screen.getByTitle("播放");
    expect(playerButton).toBeInTheDocument();

    const startSec = 20;
    const jumpGap = 10;
    const rates = [1, 2, 3];
    const modeTestId = "mode-box";
    rerender(
      <Player
        audioSrc={audioSrc}
        startSec={startSec}
        autoPlay
        controls={{
          changeSong: jest.fn(),
          jumpGap,
          changeRates: rates,
          sleep: [{ text: "off", minutes: 0 }],
          changeMode: <div data-testid={modeTestId} />,
        }}
      />
    );

    expect(screen.getByTitle("切至上一首")).toBeInTheDocument();
    expect(screen.getByTitle("切至下一首")).toBeInTheDocument();
    expect(screen.getByTitle(`跳至${jumpGap}秒前`)).toBeInTheDocument();
    expect(screen.getByTitle(`跳至${jumpGap}秒後`)).toBeInTheDocument();
    expect(screen.getByText(`${rates[0]}x`)).toBeInTheDocument();
    expect(screen.getByTitle("設定睡眠")).toBeInTheDocument();
    expect(screen.getByTestId(modeTestId)).toBeInTheDocument();

    rerender(<Player audioSrc={{ url: audioSrc.url }} />);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(screen.queryByRole("separator")).not.toBeInTheDocument();
  });

  it("should play the song while clicking the PlayButton", () => {
    render(<Player audioSrc={audioSrc} />);
    const playButton = screen.getByRole("button");

    fireEvent.click(playButton);
    expect(play).toBeCalled();
  });

  it(`should play the song automatically
      if the autoPlay property set true`, () => {
    render(<Player audioSrc={audioSrc} autoPlay />);
    expect(play).toBeCalled();
  });
});
