import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef("nami");
  inputRef.current;

  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <input type="text" />
    </div>
  );
}

export default UseRef;
