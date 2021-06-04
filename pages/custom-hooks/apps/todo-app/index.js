import React, { useState } from "react";
import useTodos from "~/hooks/useTodos";

const initialTodos = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node.js" },
];

function TodoApp() {
  const [todoForm, setTodoForm] = useState("");
  const { todos, createTodo, deleteTodo } = useTodos(initialTodos);

  const handleinput = (event) => {
    const { value } = event.target;
    setTodoForm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(todoForm);
    setTodoForm("");
  };

  return (
    <>
      <h2>{"useTodos()"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="col-6 my-3">
          <label className="sr-only mb-2" htmlFor="inlineFormInputGroup">
            New task:
          </label>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Go walk, go swimming..."
              value={todoForm}
              onChange={handleinput}
            />
            <div className="input-group-prepend">
              <button className="btn btn-secondary px-4" type="submit">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>

      <ul className="list-group col-6">
        {todos.map((todo) => (
          <>
            <li
              className="list-group-item d-flex justify-content-between aling-items-center max-w-lg"
              key={todo.id}
            >
              {todo.title}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
