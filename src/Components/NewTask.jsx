import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NewTask = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(storedTodos);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue('');
      }
    };
  
    const handleToggleTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      setTodos(updatedTodos);
    };
  
    const handleDeleteTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    };
  
  return (
    <> 
    
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
          className="flex-grow mr-2 border border-gray-300 rounded px-4 py-2 focus:outline-none"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center justify-between bg-gray-100 px-4 py-2 rounded ${
              todo.completed ? 'line-through' : ''
            }`}
          >
            <span>{todo.text}</span>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(index)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <button
                onClick={() => handleDeleteTodo(index)}
                className="text-red-500 hover:text-red-600 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

  
    
    </>
  )
}

export default NewTask