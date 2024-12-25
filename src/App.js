import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className="todo-list">
      <div>
        <h1>To-do List</h1>
        <input
          type="text"
          className="task-input"
          placeholder="Enter the task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="add-button"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index} className="task-item">
            <span className="text">{task}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
