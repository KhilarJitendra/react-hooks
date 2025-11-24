````md
# What is useLayoutEffect?

- `useLayoutEffect` is a React Hook that lets you run a function synchronously after the DOM is updated but before the browser paints the screen.

```js
useLayoutEffect(() => {
  // code here runs after DOM updates
}, [dependencies]);
````

> “I want to make changes to the DOM immediately before the user sees it.”

It’s similar to `useEffect`, but `useEffect` runs **after painting**, whereas `useLayoutEffect` runs **before painting**, so it can prevent flickers.

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

## Example in E-Commerce App

### useLayoutEffect

**Scenario:** Adjusting product image container height dynamically

```jsx
import { useLayoutEffect, useRef, useState } from "react";

function ProductCard({ product }) {
  const imgRef = useRef();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (imgRef.current) {
      setHeight(imgRef.current.offsetWidth); // make height = width for square card
    }
  }, []);

  return (
    <div style={{ width: "200px", height: `${height}px`, border: "1px solid #ccc" }}>
      <img ref={imgRef} src={product.image} alt={product.name} style={{ width: "100%" }} />
      <p>{product.name}</p>
    </div>
  );
}
```

**Why useLayoutEffect?**

* We measure the image width and immediately adjust the height **before the user sees it**.
* Prevents layout flicker or jump — user always sees a perfect square card.

---

### useEffect

**Scenario:** Fetching product data from an API

```jsx
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

**Why useEffect?**

* Fetching data does **not affect layout before paint**.
* User can see a loader first → then products appear.
* No flickering occurs, so `useEffect` is perfect here.
