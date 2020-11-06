import React, { useRef, useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

const MyRef = () => {
  const ref = useRef();
  useClickOutside(ref, () => console.log('Outside'));
  return (
    <div style={{ padding: '50px', border: '1px solid red' }}>
      <p>Outside</p>
      <div ref={ref} style={{ padding: '20px', border: '1px solid blue' }}>
        <div>Inside</div>
      </div>
    </div>
  );
};

export default MyRef;
