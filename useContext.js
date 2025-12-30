What is useContext?

- useContext is a React Hook that lets your component read values from a Context Provider and automatically re-render when the context changes.

const value = useContext(SomeContext);

It helps you share data across many components without passing props manually at every level.

👉 Think of it like broadcasting a value to all components below it.

✅ Step 1 — Create Context (with a default value) IN SEPARATE FILE 

import { createContext } from "react";

const ThemeContext = createContext({theme: "light"}); 
// "light" = default value

✅ Step 2 — Wrap your app with a Provider
import ThemeContext from './ThemeContext.js'
<ThemeContext.Provider value={{ theme: 'dark' }}>
  <App />
</ThemeContext.Provider>

Everything inside <ThemeContext.Provider> can now read "dark".

✅ Step 3 — Read the value using useContext

import { useContext } from "react";
import ThemeContext from './ThemeContext.js'

function Button() {
  const { theme } = useContext(ThemeContext);

  return <button>{theme}</button>;
}

This button will show "dark" because it is inside the Provider.

📌 What does useContext return?

✔ The value from the closest matching Provider
✔ If no Provider exists → returns the default value from createContext
✔ Always stays updated (component re-renders automatically when context changes)

🧠 Important Behavior

useContext always looks up the tree

It does NOT look sideways

It does NOT look below

It does NOT look in the same component

It reads the nearest provider above it.
  
