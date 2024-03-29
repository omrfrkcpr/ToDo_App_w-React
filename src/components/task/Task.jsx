import React, { useState } from "react";
import "./Task.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";

export function Task({ task, onDelete, onComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleToggleCompletion = () => {
    onComplete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSaveEdit();
    }
  };

  const handleSaveEdit = () => {
    if (editedTitle.trim() !== "") {
      // edited task title 
      onEdit(task.id, editedTitle);
      setIsEditing(false);
      setEditedTitle(editedTitle); 

      // update localstorage with the new task title
      const updatedTasks = JSON.parse(localStorage.getItem("todo:tasks")).map(
        (t) => {
          if (t.id === task.id) {
            t.title = editedTitle;
          }
          return t;
        }
      );
      localStorage.setItem("todo:tasks", JSON.stringify(updatedTasks));
    }
  };

  return (
    <div className="task d-flex justify-content-between align-items-center m-auto">
      <button className="checkContainer" onClick={handleToggleCompletion}>
        {task.isCompleted ? (
          <BsFillCheckCircleFill
            style={{ color: "purple", width: "18px", marginBottom: "10px" }}
            className="checkCircle"
          />
        ) : (
          <div />
        )}
      </button>

      {isEditing ? (
        <input
          type="text"
          className="editInput"
          value={editedTitle}
          onChange={handleInputChange}
          autoFocus
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p
          className={task.isCompleted ? "textCompleted mt-2" : "mt-2"}
          onClick={handleToggleCompletion}
        >
          {editedTitle || task.title}
        </p>
      )}

      <button className="editButton">
        {isEditing ? (
          <BsFillCheckCircleFill
            size={20}
            style={{ color: "white" }}
            onClick={handleSaveEdit}
            className="checkCircleFill"
          />
        ) : (
          <FaEdit
            size={20}
            style={{ color: "white" }}
            onClick={handleEdit}
            className="editIcon"
          />
        )}
      </button>

      <button
        className="deleteButton"
        onClick={() =>
          window.confirm("Are you sure you want to delete your todo?") &&
          onDelete(task.id)
        }
      >
        <TbTrash size={20} style={{ color: "white" }} className="trashIcon" />
      </button>
    </div>
  );
}
