import { render, screen } from '@testing-library/react';
import Todo from "./Todo"

const TODO_TEST = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
}

describe("render without crashing", function () {
  it("renders without crashing", function() {
    render(<Todo todo={ TODO_TEST } />)
  });
});

describe("snapshot tests for stability", function () {
  it("matches snapshot", function () {
    const { container } = render(<Todo todo={ TODO_TEST }/>);
    expect(container).toMatchSnapshot();
  });
});

it("Renders appropriate todo item on DOM", function () {
  const { queryByText } = render(<Todo todo={ TODO_TEST }/>);

  const todo = queryByText("Write some code")
  expect(todo).toBeInTheDocument();
})
