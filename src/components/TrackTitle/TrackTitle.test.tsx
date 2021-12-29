import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TrackTitle from "./TrackTitle";

describe("TrackTitle", () => {
  const name = "Wedding Day";
  const artist = "John";

  it("should render correct titles", () => {
    render(<TrackTitle name={name} artist={artist} />);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(artist)).toBeInTheDocument();
  });

  it("shouldn't render title if data not provided", () => {
    render(<TrackTitle name={name} />);
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.queryByText(artist)).not.toBeInTheDocument();
  });
});
