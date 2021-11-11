import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App, { sum } from "./App";

describe("App", () => {
  it("should show 'Hello' in App", () => {
    render(<App />);
    const container = screen.getByTestId("container");
    expect(container).toHaveTextContent("Hello");
  });

  it("should sum numbers correctly", () => {
    const answer = sum(2, 2, 3);
    expect(answer).toBe(7);
  });
});
