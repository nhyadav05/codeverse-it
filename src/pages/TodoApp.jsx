import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, reminder) => {
    const newTask = {
      id: Date.now(),
      name,
      important: false,
      completed: false,
      reminder: reminder || null,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleImportant = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const toggleComplete = (id) => {
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, completed: !task.completed } : task
    //   )
    // );

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="  p-5 bg-gray-200 min-h-screen">
      <h1 className="text-4xl text-center my-5 font-bold ">Todo App</h1>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            toggleImportant={toggleImportant}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
