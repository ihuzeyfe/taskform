import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [tasks, setTask] = useState([]);

  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/task", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];
    setTask(createdTasks);
  };

  const fetchTask = async() => {
    const response = await axios.get("http://localhost:3000/task");
    debugger;
    setTask(response.data);
  }

  useEffect(()=> {
    fetchTask();
  },[])

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/task/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTask(afterDeletingTasks);
  };

  const editTaskById = async(id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/task/${id}` , {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTask(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>GÖREVLER</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
