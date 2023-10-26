import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [users, setusers] = useState(false);

  useEffect(() => {
    let interval;

    if (users) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [users]);

  const toggleCounter = () => {
    setusers(!users);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={toggleCounter}>{users ? "Stop" : "Start"}</button>
    </div>
  );
}

export default Counter;
