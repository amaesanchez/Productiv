import { render } from "@testing-library/react";
import Quote from "./Quote";

const TEST_QUOTE = {
  text: "Learn from yesterday, live for today, hope for tomorrow.",
  author: "Albert Einstein",
};

describe("Quote", function () {
  it("renders without crashing", function () {
    render(<Quote quote={TEST_QUOTE} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<Quote quote={TEST_QUOTE} />);
    expect(container).toMatchSnapshot();
  });

  it("Renders appropriate quote on DOM", function () {
    const { queryByText } = render(<Quote quote={TEST_QUOTE} />);

    const quote = queryByText(
      `Learn from yesterday, live for today, hope for tomorrow. - Albert Einstein`
    );

    expect(quote).toBeInTheDocument();
  });
});
