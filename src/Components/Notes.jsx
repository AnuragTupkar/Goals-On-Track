import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  return (
   
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your note..."
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none"
          />
        </div>
        <button
          onClick={handleAddNote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none mb-4"
        >
          Add Note
        </button>
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded">
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>

  );
};

export default Notes;
