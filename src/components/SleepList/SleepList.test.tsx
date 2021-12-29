import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SleepList from "./SleepList";

describe("SleepList", () => {
  const options = [
    { text: "off", minutes: 0 },
    { text: "1分鐘", minutes: 1 },
    { text: "2分鐘", minutes: 2 },
    { text: "3分鐘", minutes: 3 },
  ];

  it("should render the list", () => {
    render(
      <SleepList
        options={options}
        checkedOption={0}
        setCheckedOption={jest.fn()}
      />
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(options.length);
  });

  it("should fire the click event", () => {
    const handleItemClick = jest.fn();
    const [, { text, minutes }] = options;
    render(
      <SleepList
        options={options}
        checkedOption={0}
        setCheckedOption={handleItemClick}
      />
    );
    fireEvent.click(screen.getByText(text));
    expect(handleItemClick).toBeCalledTimes(1);
    expect(handleItemClick).toBeCalledWith(+minutes);
  });
});
