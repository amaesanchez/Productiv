import { fireEvent, render, screen } from "@testing-library/react";
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

  it("renders form correctly on DOM", function () {
    const { container } = render(
      <TodoForm initialFormData={{ title: "", description: "", priority: 1 }} />
    );

    const form = container.querySelector(".NewTodoForm");

    expect(form).toBeInTheDocument();
  });

  it("should invoke save prop method when form is submitted", function () {
    const saveMock = jest.fn();

    render(
      <TodoForm
        save={saveMock}
        initialFormData={{ title: "test", description: "testing", priority: 1 }}
      />
    );

    const goBtn = screen.getByText("Gø!");
    fireEvent.click(goBtn);

    expect(saveMock).toBeCalledWith({
      title: "test",
      description: "testing",
      priority: 1,
    });
    expect(saveMock).toBeCalledTimes(1);
  });
});
