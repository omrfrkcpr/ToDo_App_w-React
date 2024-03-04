import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Tasks } from "./components/tasks/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const LOCAL_STORAGE_KEY = "todo:tasks";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // console.log(localStorage[LOCAL_STORAGE_KEY]);
  // const tasksString = localStorage.getItem(LOCAL_STORAGE_KEY);
  // const tasksArray = JSON.parse(tasksString);
  // const tasksLength = tasksArray.length;
  // console.log(tasksLength); //! todos length

  const addTask = (taskTitle) => {
    const isDuplicate = tasks.some((task) => task.title === taskTitle);

    if (!isDuplicate) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        isCompleted: false,
      };

      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    } else alert("Please enter a different todo");
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

  const editTaskById = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
  };

  return (
    <div className="container d-flex flex-column">
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
        onEdit={editTaskById}
      />
    </div>
  );
};

export default App;
