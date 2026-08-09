import { useState ,useEffect} from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prevCount)=>prevCount-1);
  }
  useEffect(() => {
    document.title = `Count: ${count}`;
}, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
