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

    handleAddTask(title.trim());
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className="header d-flex justify-content-center align-items-center position-relative">
      <img
        src={todoLogo}
        alt="logo"
        style={{ width: "150px", marginBottom: "1rem" }}
      />

      <form onSubmit={handleSubmit} className="newTaskForm">
        <input
          placeholder="What do you need to do?"
          type="text"
          onChange={onChangeTitle}
          value={title}
          className="main-input"
        />
        <button className=" text-white">
          Add <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
