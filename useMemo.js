- useMemo

- It is simillar to useCallback but difference i.e it caches the value where as useCallback caches funciton.
- 

| Hook / Feature  | Purpose                                | Works With                |
| --------------- | -------------------------------------- | ------------------------- |
| **React.memo**  | Prevents re-render when props are same | `useCallback`, `useMemo`  |
| **useCallback** | Caches a function                      | `React.memo`              |
| **useMemo**     | Caches a computed value                | `React.memo` (indirectly) |


  
Code 

import React, { useMemo, useState } from 'react';

export default function UseCallbackDemo() {
  const [state, setState] = useState(0);

  // Correct useMemo: do real calculation + depend on state
  const computedValue = useMemo(() => {
    console.log("Running expensive calculation...");
    return 1231 * (143 + state);
  }, [state]);

  return (
    <>
      <h1>This is my useMemo Demo</h1>
      <button onClick={() => setState(prev => prev + 1)}>
        {computedValue}
      </button>
    </>
  );
}

---- END -----
