import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

  // console.log(taskList);//*TESTING

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h1 className="font-semibold text-xl">TODO BOARD</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className="">
        {taskList.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
