import { useState } from "react";

export default function InputDisplay() {
  const [text, setText] = useState("");
  const [isBox, setIsBox] = useState(false);

  const handleButtonOpen = () => {
    setIsBox(!isBox);
  };

  if (!isBox) return <Button show={isBox} onClick={handleButtonOpen} />;

  return (
    <>
      <InputBox text={text} setText={setText} />
      <DisplayBox text={text} />
      <Button isBox={isBox} onClick={handleButtonOpen} />
    </>
  );
}

function Button({ isBox = false, onClick }) {
  //console.log(isBox);
  return <button onClick={onClick}>{isBox ? "Hide" : "Show"}</button>;
}

function InputBox({ text, setText }) {
  //console.log("render-inputbox");
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function DisplayBox({ text }) {
  //console.log("render-displaybox");s
  return <p>Value in input box: {text}</p>;
}
