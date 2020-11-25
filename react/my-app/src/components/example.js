import React, { useState } from 'react';

export function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>your clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
