import React, { useState, useCallback } from "react";
import { Header } from "./components/header/Header";
import { Tasks } from "./components/tasks/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer/Footer";

const LOCAL_STORAGE_KEY = "todo:tasks";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    // if any tasks doesnt exist in local storage, then create empty array for default useState value for tasks
    const savedTasks =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    return savedTasks;
  });

  // Update local storage
  const saveTasksToLocalStorage = useCallback((updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
  }, []);

  // add new task
  const addTask = (taskTitle) => {
    const isDuplicate = tasks.some((task) => task.title === taskTitle);

    if (!isDuplicate) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        isCompleted: false,
      };

      const newTasks = [...tasks, newTask];
      saveTasksToLocalStorage(newTasks);
    } else alert("Please enter a different todo");
  };

  // delete task
  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    saveTasksToLocalStorage(newTasks);
  };

  // toggle task complete status
  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    saveTasksToLocalStorage(newTasks);
  };

  // edit task title
  const editTaskById = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });

    saveTasksToLocalStorage(updatedTasks);
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
      <Footer />
    </div>
  );
};

export default App;
