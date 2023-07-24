import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";
import "./App.css";

function App() {

  const [tasks, setTask] = useState([])

  const createTask = (title, taskDesc) =>{
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random()*9999999),
        title,
        taskDesc,
      }
    ]
    setTask(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks=tasks.filter((task)=> {
      return task.id !==id;
    })
    setTask(afterDeletingTasks);
  }

 

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>GÖREVLER</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById}/>
    </div>
  );
}

export default App;
