import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function NameList() {
  const [List, setList] = useState(["ali", "raza", "zaidi"]);
  const [name, setName] = useState("");
  const addName = () => {
    setList((prev) => [...prev, name]);
  };
  return (
    <div>
      <ul>
        {List.map((name) => (
          <li style={{ listStyleType: "none" }}>{name}</li>
        ))}
      </ul>
      {name}
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>Add Name</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState<number>(0);
  const addvalue = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={addvalue}>add</button>
      <NameList />
    </div>
  );
}

export default App;
