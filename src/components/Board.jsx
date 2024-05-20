import React from "react";

const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((task) => index === removeIndex)
    );
  };

  return (
    <>
      <div
        className="max-w-md flex flex-col sm:flex-row gap-3 items-center justify-start border
      rounded-lg text-center text-lg pt-3 pb-4 px-4 md:px-6"
      >
        <p>{task}</p>
        <button
          className="bg-red-600 rounded-lg px-2.5 py-1 text-white font-semibold
           hover:opacity-70"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
