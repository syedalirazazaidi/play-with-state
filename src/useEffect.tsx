import React from "react";
const StopWatch = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count);
      setCount((co) => co + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>{count}</div>;
};
function Useeffect() {
  return (
    <div style={{ marginLeft: "500px" }}>
      <StopWatch />
    </div>
  );
}

export default Useeffect;
