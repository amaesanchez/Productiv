import { render, screen } from '@testing-library/react';
import Todo from './Todo';
import TodoForm from "./TodoForm"

// TODO: ask about how we would test components that have state-related functions passed as props

describe("render without crashing", function () {
  it("renders without crashing", function() {
    render(<TodoForm save={save} initialFormData={{ title: "", description: "", priority: 1 }} />)
  });
});

describe("snapshot tests for stability", function () {
  it("matches snapshot", function () {
    const { container } = render(<TopTodo save={save} initialFormData={{ title: "", description: "", priority: 1 }} />);
    expect(container).toMatchSnapshot();
  });
});

it("Renders appropriate todo item in Top Todo area of DOM", function () {
  const { queryByText } = render(<TopTodo save={save} initialFormData={{ title: "", description: "", priority: 1 }}/>);
})
