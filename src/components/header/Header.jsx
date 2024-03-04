import todoLogo from "../../assets/todo-logo.png";
import "./Header.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return alert("Please enter your todo");
    }

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className="header d-flex justify-content-center align-items-center position-relative">
      <img src={todoLogo} alt="logo" style={{ width: "100px" }} />

      <form onSubmit={handleSubmit} className="newTaskForm">
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button className="fs-5 text-white">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
