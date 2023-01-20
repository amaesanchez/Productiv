import { render, screen } from '@testing-library/react';
import TopTodo from "./TopTodo"

const TODOS_TEST = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("render without crashing", function () {
  it("renders without crashing", function() {
    render(<TopTodo todos={ TODOS_TEST } />)
  });
});

describe("snapshot tests for stability", function () {
  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={ TODOS_TEST } />);
    expect(container).toMatchSnapshot();
  });
});

it("Renders appropriate todo item in Top Todo area of DOM", function () {
  const { queryByText } = render(<TopTodo todos={ TODOS_TEST } />);

  const todo = queryByText("Cook something healthy")

  expect(todo).toBeInTheDocument();
})
//getAllByText
