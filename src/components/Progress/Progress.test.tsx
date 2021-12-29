import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Progress from "./Progress";
import formatTime from "../../utils/formatTime";

describe("Progress", () => {
  it("should render a Progress component", () => {
    const totalLength = 100;
    const currentPosition = 0;
    const { rerender } = render(
      <Progress
        totalLength={totalLength}
        currentPosition={currentPosition}
        onUpdate={jest.fn()}
      />
    );

    const input = screen.getByRole("slider");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(`${currentPosition}`);

    expect(screen.queryByText(`${currentPosition}`)).not.toBeInTheDocument();
    expect(screen.queryByText(`${totalLength}`)).not.toBeInTheDocument();

    rerender(
      <Progress
        totalLength={totalLength}
        currentPosition={currentPosition}
        text="original"
        onUpdate={jest.fn()}
      />
    );
    expect(screen.queryByText(`${currentPosition}`)).toBeInTheDocument();
    expect(screen.queryByText(`${totalLength}`)).toBeInTheDocument();

    rerender(
      <Progress
        totalLength={totalLength}
        currentPosition={currentPosition}
        text="time"
        onUpdate={jest.fn()}
      />
    );
    expect(
      screen.queryByText(`${formatTime(currentPosition)}`)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(`${formatTime(totalLength)}`)
    ).toBeInTheDocument();
  });
});
