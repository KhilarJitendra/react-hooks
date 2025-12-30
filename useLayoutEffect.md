
# What is useLayoutEffect?

- `useLayoutEffect` is a React Hook that lets you run a function synchronously after the DOM is updated but before the browser paints the screen.

```js
useLayoutEffect(() => {
  // code here runs after DOM updates
}, [dependencies]);
````

-  “I want to make changes to the DOM immediately before the user sees it.”

It’s similar to `useEffect`, but `useEffect` runs **after painting**, whereas `useLayoutEffect` runs **before painting**, so it can prevent flickers.

- Read/write DOM layout → useLayoutEffect
- Everything else → useEffect
-  ⚠️ Why misuse is bad

  useLayoutEffect blocks painting

---

## Example: Basic useLayoutEffect

```jsx
import { useLayoutEffect, useRef } from "react";

function MyComponent() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log("DOM updated!", divRef.current.offsetHeight);
  }, []); // runs once after DOM is updated

  return <div ref={divRef}>Hello</div>;
}
```

* `divRef.current.offsetHeight` gives the height of the div **after DOM updates, before the browser paints**.
* Any DOM measurements or style adjustments should be done here.

---

## Difference between useLayoutEffect and useEffect

* `useLayoutEffect` runs **earlier than useEffect**.
* Use `useLayoutEffect` when you need to **measure or adjust the DOM before the user sees it**.
* `useEffect` is preferred for **side effects that don’t affect layout**, like data fetching.

---

## 🧠 What is “Painting” in the Browser?

When a browser displays a webpage, it follows a sequence of steps to render everything you see:

1. **DOM construction** – Browser reads HTML and builds the DOM tree.
2. **CSSOM construction** – Browser reads CSS and builds the CSS object model.
3. **Layout / Reflow** – Browser calculates positions and sizes of all elements.
4. **Painting** – Browser **fills in pixels on the screen**: colors, text, images, borders, shadows, etc.

✅ Painting is literally **“drawing everything you see on the screen”**.

---
