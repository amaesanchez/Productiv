import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

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

describe("EditableTodoList", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={TODOS_TEST} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={TODOS_TEST} />);
    expect(container).toMatchSnapshot();
  });

  it("Renders all the todos in the EditableTodoList", function () {
    const { container } = render(<EditableTodoList todos={TODOS_TEST} />);

    const todosList = container.querySelector(".EditableTodoList");
    expect(todosList).toBeInTheDocument();
  });
});
