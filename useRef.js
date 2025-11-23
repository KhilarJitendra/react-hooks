useRef 
- useRef returns an object with a single property: current
- When you attach the ref to a JSX element (<input ref={myRef} />), React automatically sets ref.current to the DOM element.
- Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component.

  
By using a ref, you ensure that:
* You can store information between re-renders (unlike regular variables, which reset on every render).
* Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
* The information is local to each copy of your component (unlike the variables outside, which are shared).

  const inputRef = useRef(null);

- Passing ref to children component using forwardRef and it will be pass key ref and consume as ref not props.ref

Parent 

import React, { useRef, useEffect } from 'react';
import ChildComponent from './ChildComponent';

function UseRefDemo() {
    const ref = useRef(null);
    return (
        <ChildComponent ref={ref} />
    )
}

export default UseRefDemo;


Child 

import React, { forwardRef } from 'react';

 function ChildComponent(props, ref) {
    console.log('CHILD COMPONENT....', ref)

    return (
        <h1 ref={ref} >This is my child component value is </h1>
    )
}

export default forwardRef(ChildComponent) 
