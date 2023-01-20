import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const TODO_TEST = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

describe("EditableTodo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={TODO_TEST} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={TODO_TEST} />);
    expect(container).toMatchSnapshot();
  });

  it("Renders appropriate todo item in EditableTodoList area of DOM", function () {
    const { queryByText } = render(<EditableTodo todo={TODO_TEST} />);

    const todo = queryByText("Write some code");
    expect(todo).toBeInTheDocument();
  });

  it("Renders TodoForm when the edit button is clicked on an EditableTodo", function () {
    const { container, queryByText } = render(
      <EditableTodo todo={TODO_TEST} />
    );

    const todo = queryByText("Write some code");

    const editBtn = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editBtn);

    const editForm = container.querySelector(".NewTodoForm");

    expect(editForm).toBeInTheDocument();
    expect(todo).not.toBeInTheDocument();
  });

  // TODO: ask how to mock remove functionality (passed in as prop to EditableTodo)

  // it("Removes Todo when the delete button is clicked on an EditableTodo", function () {
  //   const { container, queryByText } = render(<EditableTodo todo={ TODO_TEST } />);

  //   const todo = queryByText("Write some code")
  //   expect(todo).toBeInTheDocument();

  //   const deleteBtn = container.querySelector(".EditableTodo-delBtn")
  //   fireEvent.click(deleteBtn)
  //   expect(todo).not.toBeInTheDocument();
  // })
});
