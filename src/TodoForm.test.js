import { render,  } from "@testing-library/react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

// TODO: ask about how we would test components that have state-related
// functions passed as props

describe("TodoForm", function () {
  it("renders without crashing", function () {
    render(
      <TodoForm initialFormData={{ title: "", description: "", priority: 1 }} />
    );
  });

  it("matches snapshot", function () {
    const { container } = render(
      <TodoForm initialFormData={{ title: "", description: "", priority: 1 }} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders form correctly on DOM", function () {
    const saveMock = jest.fn();
    const { container } = render(
      <TodoForm save={saveMock} initialFormData={{ title: "", description: "", priority: 1 }} />
    );

    const form = container.querySelector(".NewTodoForm");

    expect(form).toBeInTheDocument();
    // expect(saveMock).toBeCalled();
  });

  //to test that form submit works, test in TodoApp
});
