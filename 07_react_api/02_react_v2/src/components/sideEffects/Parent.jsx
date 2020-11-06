import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <h2>Parent</h2>
      <p>Clicked {count}</p>
      <button type="button" onClick={changeCount}>
        Update parent count on parent
      </button>
      <Child count={count} changeCount={changeCount} />
    </>
  );
};

export default Parent;
