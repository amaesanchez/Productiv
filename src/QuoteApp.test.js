import { fireEvent, render, screen } from "@testing-library/react";
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

  //TODO: figure out why button callback doesn't seem to be working

  // it("Renders quote after button is clicked", function () {
  //   const { container, debug } = render(<QuoteApp />);
  //   const getQuote = jest.fn()

  //   const quoteBtn = screen.getByText("Click here for an inspirational quote!")
  //   debug(container);
  //   fireEvent.click(quoteBtn)

  //   expect(getQuote).toBeCalled();
  // });
});
