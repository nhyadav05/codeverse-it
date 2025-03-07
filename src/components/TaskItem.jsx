import React from "react";

const TaskItem = ({ task, toggleComplete, toggleImportant }) => {
  return (
    <>
      <li  className={`p-2 border-b flex justify-between items-center ${task.important ? "bg-yellow-200" : "" }`} >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={task.completed ? "line-through" : ""}>
            {task.name}
          </span>
          {task.reminder && (
            <span className="text-xs text-red-500">
              (Reminder : {task.reminder})
            </span>
          )}
        </div>
        <button
          className="bg-red-500 text-white p-1 rounded "
          onClick={() => toggleImportant(task.id)}
        >
          {task.important ? "Unmark" : "Important"}
        </button>
      </li>
    </>
  );
};

export default TaskItem;
