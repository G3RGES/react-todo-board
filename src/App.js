import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);

  // console.log(taskList);//*TESTING

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="font-semibold text-xl">TODO BOARD</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div
        className="flex flex-col 
      sm:grid sm:grid-cols-3 gap-4 px-4 sm:px-8 md:px-10 lg:px-12"
      >
        {taskList.map((task, idx) => (
          <Board
            task={task}
            key={idx}
            index={idx}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
