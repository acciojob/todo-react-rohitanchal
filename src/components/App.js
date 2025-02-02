import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // State to manage the list of to-dos and the input value
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Handle adding a new task
  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput(""); // Clear input field after adding
    }
  };

  // Handle deleting a task
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
