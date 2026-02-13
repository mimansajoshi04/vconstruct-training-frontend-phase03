import React from "react";
export default function Ref() {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    console.log(inputRef.current);
    // 👉 Logs the actual <input> DOM node
  }, []);

  return <input ref={inputRef} />;
}
