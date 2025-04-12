import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useTodo } from "../context/todos/TodosContext";

const InputContainer = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleAdd = () => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };

    addTodo(newTodo);
    setText(""); 
  };

  return (
    <div className="input__container">
      <input
        type="text"
        placeholder="Todos..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <FiPlusCircle id="add" onClick={handleAdd} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default InputContainer;
