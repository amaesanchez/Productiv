import { render,  } from "@testing-library/react";
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
    expect(saveMock).toBeCalledTimes(1);
    //you would need to fire event to change the inputs in form for this to work
    // this mocks that the saveMock accepts the right data
    // were not checking to see that the save function changes the page
    expect(saveMock).toBeCalledWith({
      title:
      priority
      description
    })
  });

  //to test that form submit works, test in TodoApp
});
