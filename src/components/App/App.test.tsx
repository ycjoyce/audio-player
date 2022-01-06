import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  jest
    .spyOn(window.HTMLMediaElement.prototype, "play")
    .mockImplementation(() => Promise.resolve());

  jest
    .spyOn(window.HTMLMediaElement.prototype, "pause")
    .mockImplementation(() => Promise.resolve());

  it("should renders an App component", () => {
    render(<App />);
    expect(screen.getByTestId("player")).toBeInTheDocument();
  });
});
