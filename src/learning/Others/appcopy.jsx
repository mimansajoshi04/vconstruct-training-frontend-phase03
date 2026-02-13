import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./Child";
import SetCounter from "./SetCounter";

function App({ name, dance }) {
  const [count, setCount] = useState(0);
  const props = { name: "Indian" };
  const arr = [];
  arr["hello"] = "world";

  const incrementTwice = () => {
    console.log("here");
    setCount((count) => count + 2);
  };

  return (
    <>
      <Child array={arr} />
      <div>
        <p>
          <SetCounter count={count} incrementTwice={incrementTwice} />
          <br></br>
          Click on the button to increment count:{" "}
          <button onClick={() => setCount(count + 1)}>
            Increment count
          </button>{" "}
          <br></br>
          Click on the button to clear count:{" "}
          <button onClick={() => setCount(0)}>Clear count</button>
        </p>
        <p>
          {name} {props.name}
        </p>
      </div>
    </>
  );
}

export default App;
