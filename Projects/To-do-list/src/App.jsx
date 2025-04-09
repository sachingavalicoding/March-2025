import React, { useState } from "react";
// Master DSA with Daily Planning & Progress Tracking
//DSAPlannerPro
const App = () => {
  const [newTodo, setNewTodo] = useState({
    id: "",
    text: "",
    isCompleted: false,
  });
  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      text: e.target.value,
    });
  };

  return (
    <section
      className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-100
"
    >
      <main className="bg-slate-100 rounded-xl w-[30rem] min-h-[35rem] px-4 py-5 flex flex-col mx-auto mt-[4rem] ">
        <h1 className="text-3xl font-semibold italic underline text-center ">
          Day Planner
        </h1>
        <form className="px-4 py-2 flex items-center gap-2">
          <input
            type="text"
            placeholder="Todos...."
            name="newTodo"
            value={newTodo.text}
            onChange={handleChange}
            className="mt-4 p-2  border-2 border-blue-400 rounded w-full"
          />{" "}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <button className="text-4xl text-red-800">+</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default App;
