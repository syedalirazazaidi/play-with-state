import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  inputRef.current.focus();

  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <input type="text" />
    </div>
  );
}

export default UseRef;
