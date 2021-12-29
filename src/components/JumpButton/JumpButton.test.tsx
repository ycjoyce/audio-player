import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JumpButton from "./JumpButton";

describe("JumpButton", () => {
  it("should render a JumpButton component", () => {
    const content = "前10秒";
    const gap = 10;
    render(
      <JumpButton direction="prev" gap={gap} onJump={jest.fn()}>
        {content}
      </JumpButton>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(content);
    expect(button.title).toBe(`跳至${gap}秒前`);
  });

  it("should fire the click event", () => {
    const direction = "prev";
    const gap = 10;
    const onJump = jest.fn();
    render(<JumpButton direction={direction} gap={gap} onJump={onJump} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onJump).toBeCalledTimes(1);
    expect(onJump).toBeCalledWith(direction, gap);
  });
});
