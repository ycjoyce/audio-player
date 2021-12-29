import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Audio from "./Audio";

describe("Audio", () => {
  it("should render an Audio component", () => {
    render(<Audio src="" />);
    expect(screen.getByTestId("audio")).toBeInTheDocument();
  });
});
