import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTask] = useState([]);

  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3004/task", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];
    setTask(createdTasks);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3004/task");
    debugger;
    setTask(response.data);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/task/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTask(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3004/task/${id}`, {
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

  const shareValueAndMethods = {
    tasks,
    createTask,
    fetchTask,
    editTaskById,
    deleteTaskById,
  };

  return (
    <TasksContext.Provider value={shareValueAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
