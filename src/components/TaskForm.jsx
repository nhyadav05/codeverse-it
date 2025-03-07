import React,{useState} from "react";

const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");
  const [reminder, setReminder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      addTask(taskInput, reminder);
      setTaskInput("");
      setReminder("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 ">
      <input
        type="text"
        placeholder="Enter task"
        className="p-2 border rounded w-full"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <input
        type="datetime-local"
        className="p-2 border rounded w-full "
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Tasks
      </button>
    </form>
  );
};

export default TaskForm;
