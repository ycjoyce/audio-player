import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FullWidthBox from "./FullWidthBox";

describe("FullWidthBox", () => {
  it("should render a FullWidthBox component", async () => {
    const childrenContent = "children";
    render(
      <div style={{ width: "500px" }}>
        <FullWidthBox>
          <div>{childrenContent}</div>
        </FullWidthBox>
      </div>
    );

    expect(screen.getByText(childrenContent)).toBeInTheDocument();
    expect(getComputedStyle(screen.getByTestId("full-box")).width).toBe("100%");
  });
});
