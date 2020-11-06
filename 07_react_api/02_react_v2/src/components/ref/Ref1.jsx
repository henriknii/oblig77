import React, { useRef, useState } from 'react';

const MyRef = () => {
  const ref = useRef(0);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(null);

  const clear = () => {
    clearInterval(timer);
  };

  const reset = () => {
    setCounter(0);
    ref.current.style.display = 'inline-block';
    clear();
  };

  const start = () => {
    setTimer(
      setInterval(() => {
        ref.current.style.display = 'none';
        setCounter((c) => c + 1);
      }, 1000)
    );
  };

  return (
    <div>
      <p>{counter}</p>
      <button ref={ref} type="button" onClick={start}>
        Start
      </button>
      <button type="button" onClick={clear}>
        Pause
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default MyRef;
