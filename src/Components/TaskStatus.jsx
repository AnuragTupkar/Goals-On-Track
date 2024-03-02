// TaskStatus.js

import React, { useState } from 'react';

const TaskStatus = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', status: 'to-do' },
    { id: 2, text: 'Task 2', status: 'doing' },
    { id: 3, text: 'Task 3', status: 'done' }
  ]);

  const moveTask = (id, newStatus) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="flex justify-center gap-8 m-20 text-center uppercase h-[33rem]">
      <div className="w-1/3  bg-blue-400 p-4 rounded-md ">
        <h2 className="text-xl font-semibold mb-4 ">To Do</h2>
        {tasks.filter(task => task.status === 'to-do').map(task => (
          <div key={task.id} className="bg-gray-200 rounded-md p-4 mb-4" draggable onDragStart={() => moveTask(task.id, 'to-do')}>
            {task.text}
          </div>
        ))}
      </div> 
      <div className="w-1/3  bg-red-400 rounded-md p-4">
        <h2 className="text-xl font-semibold mb-4  ">Doing</h2>
        {tasks.filter(task => task.status === 'doing').map(task => (
          <div key={task.id} className="bg-gray-200 rounded-md p-4 mb-4" draggable onDragStart={() => moveTask(task.id, 'doing')}>
            {task.text}
          </div>
        ))}
      </div>
      <div className="w-1/3  bg-green-400 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4 ">Done</h2>
        {tasks.filter(task => task.status === 'done').map(task => (
          <div key={task.id} className="bg-gray-200 rounded-md p-4 mb-4" draggable onDragStart={() => moveTask(task.id, 'done')}>
            {task.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
