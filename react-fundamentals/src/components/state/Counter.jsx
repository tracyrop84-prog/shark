import { useState } from "react";

function Counter() {
  const [Count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  function decrement() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }
  return (
    <div>
      <p>Count:{Count}</p>
      <button type="button" onClick={increment}>
        Add
      </button>
      <button type="button" onClick={decrement}>
        Minus
      </button>
    </div>
  );
}
export default Counter;
