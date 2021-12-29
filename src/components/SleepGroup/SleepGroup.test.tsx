import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SleepGroup from "./SleepGroup";

describe("SleepGroup", () => {
  const options = [
    { text: "off", minutes: 0 },
    { text: "1分鐘", minutes: 1 },
    { text: "2分鐘", minutes: 2 },
    { text: "3分鐘", minutes: 3 },
  ];

  it("should render a SleepGroup component", () => {
    const title = "睡眠";
    render(
      <SleepGroup options={options} onUpdate={jest.fn()}>
        {title}
      </SleepGroup>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(title);
    fireEvent.click(button);

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(options.length);
  });
});
