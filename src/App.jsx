import { useState } from "react";
import { addTask, toggleTask, deleteTask } from "./tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prev) => addTask(prev, text));
    setText("");
  }

  return (
    <main className="note">
      <form className="add" onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          placeholder="Add a task..."
          aria-label="New task"
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">Nothing to do</p>
      ) : (
        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? "done" : ""}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => setTasks((prev) => toggleTask(prev, task.id))}
                aria-label={`Mark "${task.text}" done`}
              />
              <span>{task.text}</span>
              <button
                type="button"
                className="delete"
                onClick={() => setTasks((prev) => deleteTask(prev, task.id))}
                aria-label={`Delete "${task.text}"`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
