import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<Footer />);
  });

  it("matches snapshot", function () {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("Renders footer with appropriate text", function () {
    const { queryByText } = render(<Footer />);

    const footerTxt = queryByText("Prødutïv is copyright ©2023 by Flüffy Data Enterprises, Inc.")
    expect(footerTxt).toBeInTheDocument();
  });
});
