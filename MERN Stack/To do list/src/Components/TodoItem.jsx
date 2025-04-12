import { FaEdit, FaTrash } from "react-icons/fa";
import { useTodo } from "../context/todos/TodosContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useTodo();
  const { id, text, isCompleted } = todo;

  return (
    <li className="todo">
      <div className="todo-info">
        <input
          type="checkbox"
          name="isCompleted"
          checked={isCompleted}
          style={{ transform: "scale(1.5)", cursor: "pointer" }}
        />
        <p className={isCompleted ? "line-through" : ""}>{text}</p>
      </div>
      <div className="todo-edit">
        <FaTrash className="trash" onClick={() => deleteTodo(id)} />
        <FaEdit className="edit" onClick={() => alert("Edit clicked")} />
      </div>
    </li>
  );
};

export default TodoItem;
