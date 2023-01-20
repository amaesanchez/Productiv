import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

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

describe("TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={TODOS_TEST} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={TODOS_TEST} />);
    expect(container).toMatchSnapshot();
  });

  it(`Renders all the todos in the EditableTodoList and Top Todo, and the
    TodoForm`, function () {
      const { container, queryByText } = render(
        <TodoApp initialTodos={TODOS_TEST} />
      );

      const editableTodoList = container.querySelector(".EditableTodoList");
      const topTodo = queryByText("Top Todo");
      const todoForm = container.querySelector(".NewTodoForm");

      expect(editableTodoList).toBeInTheDocument();
      expect(topTodo).toBeInTheDocument();
      expect(todoForm).toBeInTheDocument();
    });
});
