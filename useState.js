useSatet 

const [something, setSomething] = useState(initialState);

Explination - 

1. initialState
  - value can be any type. The argument is ignored after the initial state.
  - But if we pass function as intialstate it will be treated as initializer function. It should be pure take no argument and should return value of any type.
  - In strict mode react will call your initializer function in two times.

2. Returns 
  - current state
  - set function - pass next value or fuction that calculate next value by previous value. React will put your updater function in a queue and re-render your component. 
  During the next render, React will calculate the next state by applying all of the queued updaters to the previous state
  - set functions do not have a return value.
  - If the new value you provide is identical to the current state, It will skip re-render.

4. Pitfall
 - Calling the set function does not change the current state in the already executing code

5. Updating state based on the previous state 
 - React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

6. Updating objects and arrays in state 
 - // ✅ Replace state with a new object
setForm({
  ...form,
  firstName: 'Taylor'
});

7. Avoiding recreating the initial state (IMP)
  - React saves the initial state once and ignores it on the next renders.
  - To solve this, you may pass it as an initializer function to useState instead:
  - const [todos, setTodos] = useState(createInitialTodos);

8. Resetting state with a key (IMP)
- You’ll often encounter the key attribute when rendering lists. However, it also serves another purpose.
- You can reset a component’s state by passing a different key to a component. 
  In this example, the Reset button changes the version state variable, 
  which we pass as a key to the Form. When the key changes, React re-creates the Form component (and all of its children) from scratch, so its state gets reset.

import { useState } from 'react';

export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
    </>
  );
}


----- END ----- 

