import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const localTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(localTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => setTodos([todo, ...todos]);
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const value = {
    todos,
    addTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
export default TodoContextProvider;
