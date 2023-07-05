import React, { useState, useRef, useEffect } from "react";
import { rcompareIdentifiers } from "semver";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const inputRef = useRef();
  const reRenderCount = useRef(0);

  const onButtonClick = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };

  useEffect(() => {
    reRenderCount.current = reRenderCount.current + 1;
    console.log(`#Render: ${reRenderCount.current}`);
  });

  return (
    <>
      <h1>useRef</h1>
      <button onClick={onButtonClick}>Focus the input</button>
      <input ref={inputRef} type="text" />

      <p>{"=".repeat(50)}</p>
      <button onClick={() => setCount1((prevCount) => prevCount + 1)}>
        {count1}
      </button>
      <button onClick={() => setCount2((prevCount) => prevCount + 1)}>
        {count2}
      </button>
    </>
  );
}

export default App;
