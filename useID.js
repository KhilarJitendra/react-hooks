- useId()

- generating unique IDs that can be passed to accessibility attributes.
- const passwordHintId = useId();
- useId returns a unique ID string associated with this particular useId call in this particular component.
- We can use useId both in server as well client side


IMP Concepts - 
- I use useId for accessibility-related IDs like label, input, and ARIA attributes, especially in SSR. 
  I avoid it for keys or business identifiers because it’s not stable or meaningful outside rendering.

- without useId reusing the component would create duplicate IDs. useId guarantees unique, 
  stable IDs per component instance, which is essential for accessibility and SSR.

- ID is tied to the component instance, not each render.

- useId generates deterministic IDs based on render order, not randomness. 
  React guarantees the same order on the server and client, which makes the IDs stable and hydration-safe.

- Why IDs look like :r0:, :r1:

  r → React-generated

  Number → order in the render tree

  : → internal namespace (to avoid collisions



import React, { useId } from 'react';

export default function UseIdMultiple() {
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input id={nameId} type="text" />
      </div>

      <div>
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" />
      </div>
    </form>
  );
}
