import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PlayerButtonGroup from "./PlayerButtonGroup";

describe("PlayerButtonGroup", () => {
  it("should play the song while clicking the PlayButton", () => {
    const actions = {
      togglePlay: jest.fn(),
      handleSongChange: jest.fn(),
    };
    render(
      <PlayerButtonGroup audioElement={null} playing={false} {...actions} />
    );
    const playButton = screen.getByRole("button");
    fireEvent.click(playButton);
    expect(actions.togglePlay).toBeCalled();
  });
});
