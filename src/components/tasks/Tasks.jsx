import { Task } from "../task/Task";
import "./Tasks.css";

export function Tasks({ tasks, onDelete, onComplete, onEdit }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  // clear local storage
  const handleClear = () => localStorage.clear();

  return (
    <section className="tasks w-100">
      <header className="header d-flex align-items-center justify-content-between w-75 mx-auto bg-white">
        <div className="taskStatics">
          <p className=" mt-3">Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div className="taskStatics">
          <p className=" mt-3">Completed tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      {/* render all tasks that saved or added */}
      <div className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        ))}
      </div>

      <div className="clear mt-4 text-center">
        <button
          className="btn clear-btn border-2"
          onClick={() => {
            if (document.querySelector(".list").childElementCount > 0) {
              if (
                window.confirm(
                  "Are you sure you want to clear your entire todo list permanently?"
                )
              ) {
                handleClear();
                window.location.reload();
              }
            } else {
              alert(
                "There is no task on your to-do list. Please enter something before clearing"
              );
              document.querySelector(".main-input").focus();
            }
          }}
        >
          Clear
        </button>
      </div>
    </section>
  );
}
