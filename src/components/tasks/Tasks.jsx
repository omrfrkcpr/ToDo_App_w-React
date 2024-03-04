import { Task } from "../task/Task";
import "./Tasks.css";

export function Tasks({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className="tasks w-100">
      <header className="header d-flex align-items-center justify-content-between">
        <div>
          <p className="text-white mt-3">Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className="text-white mt-3">Completed tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <div className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
}
