import React from "react";
import TodoContainer from "./Components/TodoContainer";
import TodosContext from "./context/todos/TodosContext";
import TodoContextProvider from "./context/todos/TodosContext";

const App = () => {
  return (
    <TodoContextProvider>
      <TodoContainer />
    </TodoContextProvider>
  );
};

export default App;
