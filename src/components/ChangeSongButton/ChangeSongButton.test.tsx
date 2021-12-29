import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChangeSongButton from "./ChangeSongButton";

describe("ChangeSongButton", () => {
  it("should render a ChangeSongButton component", () => {
    const children = "上一首";
    const direction = "prev";
    const onChange = jest.fn();
    render(
      <ChangeSongButton direction={direction} onChange={onChange}>
        {children}
      </ChangeSongButton>
    );

    const button = screen.getByTitle("切至上一首");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("上一首");
  });

  it("should fire the click event", () => {
    const direction = "next";
    const onChange = jest.fn();
    render(<ChangeSongButton direction={direction} onChange={onChange} />);

    const button = screen.getByTitle("切至下一首");
    fireEvent.click(button);
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(direction);
  });
});
