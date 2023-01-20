import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("matches snapshot", function () {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it(`Renders the App with the TodoApp component`, function () {
    const { container } = render(<App />);

    const todoApp = container.querySelector(".TodoApp");
    expect(todoApp).toBeInTheDocument();
  });

  it("rendered quotes app", function () {
    const result = render(<App />);
    expect(
      result.queryByText("Click here for an inspirational quøte!")
    ).toBeInTheDocument();
  });
});
