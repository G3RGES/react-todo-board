import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);

  // console.log(taskList);//*TESTING

  return (
    <>
      <h1>TODO BOARD</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className="">
        {taskList.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </div>
    </>
  );
}

export default App;
