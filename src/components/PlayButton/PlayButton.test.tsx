import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayButton from "./PlayButton";

describe("PlayButton", () => {
  it("should render a PlayButton component", () => {
    render(<PlayButton playing onClick={jest.fn()} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.title).toBe("暫停");
  });

  it("should fire the click event", () => {
    const onClick = jest.fn();
    render(<PlayButton playing onClick={onClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(false);
  });
});
