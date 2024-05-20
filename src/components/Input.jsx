import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <form className="flex flex-row gap-3">
        <input
          className="border rounded-lg px-2 py-1 text-lg"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 rounded-lg px-3.5 py-2 text-white font-semibold
           hover:opacity-70"
          onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
