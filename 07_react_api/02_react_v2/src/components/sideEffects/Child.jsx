import React, { useState, useEffect } from 'react';

const Child = ({ count, changeCount }) => {
  const [state, setState] = useState('Default text');
  const [eff2, setEff2] = useState(0);
  const [eff3, setEff3] = useState(0);

  const updateText = () => {
    setState('rerender fant sted');
  };

  useEffect(() => {
    console.log('Rendered without dependency after render is complete');
    console.log(count);
  }); // run every time rerender happens

  useEffect(() => {
    console.log('Rendered once on mount after render is complete');
    setEff2((c) => c + 1);
  }, []); // run once on mount

  useEffect(() => {
    console.log('Rendered when dependency updates after render is complete');
    // const interval = setInterval(() => {
    //   console.log('Interval is running', count);
    // }, 1000);
    setEff3((c) => c + 1);
    return () => {
      console.log('Cleaning up', count);
      // clearInterval(interval);
    };
  }, [count]); // is run after mount but not when childe state updates

  return (
    <>
      <h2>Child</h2>
      <p>{state}</p>
      <button type="button" onClick={changeCount}>
        Update parent count fra child
      </button>
      <button type="button" onClick={updateText}>
        Update child tekst
      </button>
      <p>Ingen dependency: Rendrer hele tiden (se console)</p>
      <p>[] Rendrer ved mount: {eff2}</p>
      <p>[count] Rendrer ved mount og ved count update: {eff3}</p>
    </>
  );
};

export default Child;
