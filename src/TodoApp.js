import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList, TopTodo }
 */

function TodoApp({ initialTodos }) {
  // state
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function save(newTodo) {
    const taggedTodo = { ...newTodo, id: uuid() };
    setTodos((todos) => [...todos, taggedTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const { id } = updatedTodo;

    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          <h3>Todos</h3>
          {todos.length > 0 ? (
            <EditableTodoList todos={todos} update={update} remove={remove} />
          ) : (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>

            {todos.length > 0 ? (
              <TopTodo todos={todos} />
            ) : (
              <span className="text-muted">No todos yet!</span>
            )}
          </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm
              initialFormData={{ title: "", description: "", priority: 1 }}
              save={save}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
