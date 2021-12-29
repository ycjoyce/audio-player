import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render, fireEvent } from "@testing-library/react";
import RateButton from "./RateButton";

describe("RateButton", () => {
  const rates = [1, 2, 3];

  it("should render a RateButton component", () => {
    render(<RateButton rates={rates} onUpdate={jest.fn()} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(`${rates[0]}x`);
  });

  it("should fire a click event", () => {
    const onUpdate = jest.fn();
    render(<RateButton rates={rates} onUpdate={onUpdate} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveTextContent(`${rates[1]}x`);
    expect(onUpdate).toBeCalledWith(rates[1]);
    fireEvent.click(button);
    expect(button).toHaveTextContent(`${rates[2]}x`);
    expect(onUpdate).toBeCalledWith(rates[2]);
    fireEvent.click(button);
    expect(button).toHaveTextContent(`${rates[0]}x`);
    expect(onUpdate).toBeCalledWith(rates[0]);
  });
});
