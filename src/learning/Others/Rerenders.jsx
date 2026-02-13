import { useState } from "react";

export default function Rerenders() {
  console.log("rendering...");
  const [color, setColor] = useState("black");

  const handleColorChange = (color) => {
    setColor(color);
  };
  return (
    <article style={{ backgroundColor: color, padding: "10px" }}>
      <button onClick={() => handleColorChange("red")}>Red</button>
      <button onClick={() => handleColorChange("blue")}>Blue</button>
      <button onClick={() => handleColorChange("green")}>Green</button>
    </article>
  );
}
