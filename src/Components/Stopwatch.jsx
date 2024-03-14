import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [mode, setMode] = useState('stopwatch');
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [alarmTime, setAlarmTime] = useState('');
  const intervalRef = useRef(null);

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(currentTime - startTime);
        if (mode === 'alarm' && alarmTime && currentTime - startTime >= parseInt(alarmTime) * 1000) {
          handleAlarm();
        }
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const handleAlarm = () => {
    alert('Alarm!');
    clearInterval(intervalRef.current);
    setAlarmTime('');
  };
  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
    const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const handleAlarmInputChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const handleToggleMode = () => {
    if (mode === 'stopwatch') {
      setMode('alarm');
    } else {
      setMode('stopwatch');
    }
  };

  return (
    
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">{mode === 'stopwatch' ? 'Stopwatch' : 'Alarm'}</h1>
        {mode === 'alarm' && (
          <div className="mb-4">
            <label htmlFor="alarm" className="block mb-2">Set Alarm (seconds)</label>
            <input
              type="number"
              id="alarm"
              value={alarmTime}
              onChange={handleAlarmInputChange}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>
        )}
        <div className="flex items-center justify-center mb-8">
          <span className="text-4xl font-bold">{formatTime(elapsedTime)}</span>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleStartStop}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          >
            Reset
          </button>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={handleToggleMode}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
          >
            Switch to {mode === 'stopwatch' ? 'Alarm' : 'Stopwatch'}
          </button>
        </div>
      </div>
   
  );
}

export default Stopwatch;
