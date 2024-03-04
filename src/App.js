import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Tasks } from "./components/tasks/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // const tasksString = localStorage.getItem(LOCAL_STORAGE_KEY);
  // const tasksArray = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const tasksLength = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY)
  ).length;
  console.log(tasksLength); //! todos length

  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      isCompleted: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const editTaskById = (taskId) => {
    const currentTitle = tasks.filter((task) => task.id === taskId);
    console.log(currentTitle);
  };

  return (
    <div className="container w-75 d-flex flex-column">
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
        onEdit={editTaskById}
      />
    </div>
  );
}

export default App;
