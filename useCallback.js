useCallback - (with React.memo it will work , export child component with React.memo(ChildComponent))

Explaination - 
  
- useCallback is a React hook that memoizes a function. It returns the same function reference between re-renders unless its dependencies change.
- We use it to prevent unnecessary re-renders of child components that depend on that function.  
- useCallback helps optimize performance by preventing React from creating a new function on every render.
- Instead, it remembers the function and only recreates it when the dependencies change. This is especially useful when passing functions to memoized child components
- useCallback prevents function recreation and avoids unnecessary child re-renders.

Example 
- Hey React, don't make a new function every time—reuse the old one unless something important changes.
- useCallback = “Don’t create a new function every time. Reuse the old one.”
React always recreates functions on every render:
function handleClick() { ... } // new function every render
- If you pass this to a child component, that child may re-render unnecessarily.
useCallback stops this.

🪄 Super Short Summary
✔ React recreates functions at every render
✔ useCallback stops that
✔ It keeps one copy of the function
✔ Useful when passing functions to memoized child components (memo)
✔ It improves performance by skipping unnecessary re-renders


Code 

PARENT COMPONENT - 

import React, { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

export default function UseCallbackDemo() {
    const [state, setState] = useState(0);

    const useDisplay = useCallback((name) => {
        console.log('DISPLAY FUNCTION');
        return `Hi my name is ${name}`;
    }, []);

    return (
        <>
            <h1>This is my useCallback Demo</h1>
            <ChildComponent func={useDisplay} />
            <button onClick={() => setState(prev => prev + 1)}>COUNTER</button>
        </>
    );
}

CHILD COMPONENT -  

import React from 'react';

function ChildComponent({ func }) {
    console.log('CHILD COMPONENT RENDERED');
    return (
        <h1>{func('JITENDRA')}</h1>
    );
}

export default React.memo(ChildComponent);





---- END ---- 











