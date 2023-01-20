import { fireEvent, render } from "@testing-library/react";
import QuoteApp from "./QuoteApp";

describe("QuoteApp", function () {
  it("renders without crashing", function () {
    render(<QuoteApp />);
  });

  it("matches snapshot", function () {
    const { container } = render(<QuoteApp />);
    expect(container).toMatchSnapshot();
  });

  it("Renders button for fetching quote", function () {
    const { container } = render(<QuoteApp />);

    const quoteBtn = container.querySelector(".quoteBtn")
    expect(quoteBtn).toBeInTheDocument();
  });

  //TODO: running into issue with axios request -- how to use axios in tests

  it("Renders quote after button is clicked", function () {
    const { container } = render(<QuoteApp />);

    const quoteBtn = container.querySelector(".quoteBtn")
    fireEvent.click(quoteBtn)

    const quote = container.querySelector(".quote")
    expect(quote).toBeInTheDocument();
  });
});
