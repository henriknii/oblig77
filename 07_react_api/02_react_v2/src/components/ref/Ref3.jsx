import React, { useState, useRef, useEffect } from 'react';

const MyRef = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState('Name');
  useEffect(() => inputRef.current.focus(), []);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} ref={inputRef} value={name} />
      {name && <h1>Hello {name}!</h1>}
    </>
  );
};

export default MyRef;
