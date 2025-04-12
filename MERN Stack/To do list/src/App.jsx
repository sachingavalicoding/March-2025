import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
const App = () => {
  return (
    <section className="app__container">
      <main>
        <h1> To Do List </h1>
        <div className="todos__container">
          <div className="input__container">
            <input type="text" placeholder="Todos..." />
              <FiPlusCircle id="add" />
          </div>
          <ul>
            <li className="todo">
              <div className="todo-info">
              <input type="checkbox" name="isCompleted" />
              <p> Item 1 </p>
              </div>
              <div className="todo-edit">
              <BiSolidTrashAlt />
              <FaRegEdit />
              </div>
            </li>
            <li className="todo">
              <div className="todo-info">
              <input type="checkbox" name="isCompleted" />
              <p> Item 1 </p>
              </div>
              <div className="todo-edit">
              <BiSolidTrashAlt />
              <FaRegEdit />
              </div>
            </li>
            <li className="todo">
              <div className="todo-info">
              <input type="checkbox" name="isCompleted" />
              <p> Item 1 </p>
              </div>
              <div className="todo-edit">
              <BiSolidTrashAlt />
              <FaRegEdit />
              </div>
            </li>
            <li className="todo">
              <div className="todo-info">
              <input type="checkbox" name="isCompleted" />
              <p> Item 1 </p>
              </div>
              <div className="todo-edit">
              <BiSolidTrashAlt />
              <FaRegEdit />
              </div>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default App;
