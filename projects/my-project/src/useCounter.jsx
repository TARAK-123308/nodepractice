// useCounter.js
import { useState } from "react";

export default function useCounter(initial = 10) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return {count, increment, decrement};
}
