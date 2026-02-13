import { useEffect } from "react";
import { useState } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Mimansa");
  const [name2, setName2] = useState("Mimansa");

  useEffect(() => {
    console.log("running useEffect.");
  }, [name, name2]);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment count: {count}
      </button>
      <button
        onClick={() =>
          name === "Mimansa" ? setName("Mangesh") : setName("Mimansa")
        }
      >
        {name}
      </button>
      <button onClick={() => setName2("Mangesh")}>{name2}</button>
    </>
  );
}
