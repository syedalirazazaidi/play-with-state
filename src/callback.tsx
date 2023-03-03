import React from "react";

function Callback() {
  const [numb, setNUmn] = React.useState(["Asd", "Sad", "Asd"]);
  const [count, setcount] = React.useState(1);
  console.log(numb);
  console.log(count);

  return (
    <div style={{ marginLeft: "600px" }} onClick={() => setcount(count + 1)}>
      {count}use callback
    </div>
  );
}

export default Callback;
