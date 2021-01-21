import React from "react";
import { render, screen } from "@testing-library/react";
import Root from "./root.component";

describe("<Root/>", () => {
  render(<Root />);
  it("should render without dying", () => {
    expect(screen.getByText(/Cardiology/i)).toBeTruthy();
  });
});
