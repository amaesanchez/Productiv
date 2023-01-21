import { fireEvent, render, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";

const TODOS_TEST = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 1,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 2,
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

  it(`should show newly added todo after submitting new todo form`, function () {
    const { container } = render(<TodoApp initialTodos={TODOS_TEST} />);

    const titleField = container.querySelector("#newTodo-title");
    const descField = container.querySelector("#newTodo-description");
    const prioField = container.querySelector("#newTodo-priority");

    fireEvent.change(titleField, { target: { value: "test" } });
    fireEvent.change(descField, { target: { value: "testing" } });
    fireEvent.change(prioField, { target: { value: 1 } });

    const submitBtn = screen.getByText("Gø!");

    fireEvent.click(submitBtn);

    const newTodo = screen.getByText("test");
    expect(newTodo).toBeInTheDocument();
  });

  it(`should open up edit form and hide clicked todo after clicking edit.`, function () {
    const { container } = render(<TodoApp initialTodos={TODOS_TEST} />);

    const editBtns = screen.getAllByText("Edit");
    fireEvent.click(editBtns[0]);

    const todoForms = container.querySelectorAll(".NewTodoForm");
    expect(todoForms.length).toBe(2);
  });

  it("should update existing todo in todolist and top todo after editing and submitting edit form.", function () {
    const { container } = render(<TodoApp initialTodos={TODOS_TEST} />);

    const editBtns = screen.getAllByText("Edit");
    fireEvent.click(editBtns[0]);

    const titleFields = container.querySelectorAll("#newTodo-title");
    const descFields = container.querySelectorAll("#newTodo-description");
    const prioFields = container.querySelectorAll("#newTodo-priority");

    fireEvent.change(titleFields[0], { target: { value: "test" } });
    fireEvent.change(descFields[0], { target: { value: "testing" } });
    fireEvent.change(prioFields[0], { target: { value: 1 } });

    const goBtns = screen.getAllByText("Gø!");
    fireEvent.click(goBtns[0]);

    const newTodos = screen.getAllByText("test");
    expect(newTodos.length).toBe(2);
  });

  it(`should have one less todo in todolist and top todo should change after clicking delete button`, function () {
    const { container } = render(<TodoApp initialTodos={TODOS_TEST} />);

    const currentTodos = container.querySelectorAll(".Todo");
    const todoToBeDeleted = currentTodos[0];

    const delBtns = screen.getAllByText("Del");
    fireEvent.click(delBtns[0]);

    const todos = container.querySelectorAll(".Todo");
    expect(todos.length).toBe(3);
    expect(todoToBeDeleted).not.toBeInTheDocument();
  });
});
