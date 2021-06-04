import { useState } from "react";

function useTodos(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);

  const createTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id != todo.id));
  };

  return {
    todos,
    createTodo,
    deleteTodo,
  };
}

export default useTodos;
