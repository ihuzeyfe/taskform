import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useContext, useEffect } from "react";
import "./App.css";
import { useState } from "react";
import TasksContext from "./context/task";

function App() {
  const { fetchTask } = useContext(TasksContext);
  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>GÖREVLER</h1>
      <TaskList />
    </div>
  );
}

export default App;


// json-server --watch api/db.json --port 3004