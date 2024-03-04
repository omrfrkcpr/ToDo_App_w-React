import "./Task.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className="task d-flex justify-content-between align-items-center w-100">
      <button className="checkContainer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? (
          <BsFillCheckCircleFill style={{ color: "purple" }} />
        ) : (
          <div />
        )}
      </button>

      <p className={task.isCompleted ? "textCompleted mt-2" : "mt-2"}>
        {task.title}
      </p>

      <button
        className="deleteButton"
        onClick={() =>
          window.confirm("Are you sure you want to delete your todo?") &&
          onDelete(task.id)
        }
      >
        <TbTrash size={20} style={{ color: "white" }} />
      </button>
    </div>
  );
}
