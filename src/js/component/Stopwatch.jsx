import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-warning p-2 m-1" onClick={() => setIsRunning(true)}>Start</button>
        <button type="button" className="btn btn-warning p-2 m-1" onClick={() => setIsRunning(false)}>Stop</button>
        <button type="button" className="btn btn-warning p-2 m-1" onClick={() => setTime(0)}>Reset</button>
      </div>    
    </div>
  );
};

export default Stopwatch;
