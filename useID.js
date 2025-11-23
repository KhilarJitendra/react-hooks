- useId()

- generating unique IDs that can be passed to accessibility attributes.
- const passwordHintId = useId();
- useId returns a unique ID string associated with this particular useId call in this particular component.
- We can use useId both in server as well client side


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
