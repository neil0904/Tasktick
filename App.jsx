import React, { useState } from 'react';
import taskLogo from './Tasktick.png';
import './style.css';

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false }
    ]);
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
   
    <div className='mainDiv'>
    <div>
      <img src={taskLogo}/>
    </div>
      <form onSubmit={handleSubmit} className="newItemForm">
        <div className="rowForm">
          <label htmlFor="newItem">Add a new task</label>
          </div>
          <div>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="newItem"
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <h1 className="todoList">Todo List</h1>
      <ol className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input className='check' 
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn del">
              Delete
            </button>
          </li>
        ))}
      </ol>
      </div>
    </>
  );
}
