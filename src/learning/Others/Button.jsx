import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Button() {
  const [count, setCount] = useState(0);
  console.log(useParams());
  return (
    <>
      <p>COUNT: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
