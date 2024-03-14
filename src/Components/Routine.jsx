import React, { useState } from 'react';
import Notes from './Notes';
import NewTask from './NewTask';
import Stopwatch from './Stopwatch';
import Resource from './Resource';

const Routine = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [routines, setRoutines] = useState([]);
  const [selectedTool, setSelectedTool] = useState(null);
  const [originalView, setOriginalView] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddRoutine = () => {
    if (inputValue.trim() !== '') {
      setRoutines([...routines, { name: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedRoutines = [...routines];
    updatedRoutines[index].completed = !updatedRoutines[index].completed;
    setRoutines(updatedRoutines);
  };

  const handleDeleteRoutine = (index) => {
    const updatedRoutines = [...routines];
    updatedRoutines.splice(index, 1);
    setRoutines(updatedRoutines);
  };

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
    setOriginalView(false);
  };

  const handleBackClick = () => {
    setSelectedTool(null);
    setOriginalView(true);
  };

  return (
    <div className='flex'>
      <div className='bg-blue-900 w-3/4 h-[39.9rem] p-8'>
        <h1 className='text-white text-3xl font-semibold mb-8'>Routine</h1>
        <div>
          {routines.map((routine, index) => (
            <div key={index} className={`flex items-center justify-between mb-4 ${routine.completed ? 'line-through opacity-50' : ''}`}>
              <h1 className='text-white text-2xl'>{routine.name}</h1>
              <div className="flex items-center">
                <input
                  type='checkbox'
                  checked={routine.completed}
                  onChange={() => handleToggleComplete(index)}
                  className='mr-4'
                />
                <button onClick={() => handleDeleteRoutine(index)} className='bg-red-600 text-white py-1 px-2 rounded'>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className='font-semibold text-xl  border border-black rounded-lg px-4 py-2 mt-4 mr-24'
        />
        <button
          onClick={handleAddRoutine}
          className='font-semibold text-xl bg-blue-600 border border-black text-white rounded-lg px-4 py-2 mt-4'
        >
          ADD Routine
        </button>
      </div>
      <div className='bg-blue-600 w-1/4 h-[39.9rem] tools'>
        <h1 className='text-white text-3xl font-semibold text-center mt-10'>Tools</h1>
        {selectedTool === null && (
          <>
            <button onClick={() => handleToolClick('NewTask')} className='font-semibold text-xl bg-blue-600 border border-black rounded-lg px-4 py-2 mt-10 mx-auto block'>ADD Task</button>
            <button onClick={() => handleToolClick('Notes')} className='font-semibold text-xl bg-blue-600 border border-black rounded-lg px-4 py-2 mt-4 mx-auto block'>ADD NOTES</button>
            <button onClick={() => handleToolClick('Resource')} className='font-semibold text-xl bg-blue-600 border border-black rounded-lg px-4 py-2 mt-4 mx-auto block'>RESOURCES</button>
            <button onClick={() => handleToolClick('Stopwatch')} className='font-semibold text-xl bg-blue-600 border border-black rounded-lg px-4 py-2 mt-4 mx-auto block'>CLOCK</button>
          </>
        )}
        {selectedTool && (
          <>
           <div className='my-8'>
            {selectedTool === 'Notes' && <Notes />}
            {selectedTool === 'NewTask' && <NewTask />}
            {selectedTool === 'Resource' && <Resource />}
            {selectedTool === 'Stopwatch' && <Stopwatch />}
           </div>
            
            <button onClick={handleBackClick} className='font-semibold text-xl bg-red-600 text-white rounded-lg px-4 py-2 mt-4 mx-auto block'>Back</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Routine;
