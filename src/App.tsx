import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function NameList() {
  const [List, setList] = useState(["ali", "raza", "zaidi"]);
  const [name, setName] = useState(() => "developer");
  const [state, dispatch] = useReducer(
    (state: any, action: any): any => {
      switch (action.type) {
        case "CHANG_NAME":
          return { ...state, name: action.payload };
        case "ADD_LIST":
          return {
            ...state,
            list: [...state.name, state.name],
            name: "",
          };
        case "ADD_NUMB":
          return {
            ...state,
            age: state.age + 98,
          };
      }
    },
    {
      list: [],
      name: "Taylor",
      age: 42,
    }
  );
  const addName = () => {
    setList((prev) => [...prev, name]);
    setName("");
  };
  return (
    <div>
      <ul>
        {List.map((name) => (
          <li style={{ listStyleType: "none" }}>{name}</li>
        ))}
      </ul>
      <p>Reducer</p>
      {state.age}
      <ul>
        {state.list.map((nam: any) => (
          <li style={{ listStyleType: "none" }}>{nam}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Reducer</p>
      <input
        type="text"
        value={state.name}
        placeholder="name"
        onChange={(e) => {
          dispatch({
            type: "CHANG_NAME",
            payload: e.target.value,
          });
        }}
      />

      {/* <button onClick={() => dispatch({ type: "ADD_LIST" })}>Add LIST</button> */}
      <button onClick={() => dispatch({ type: "ADD_NUMB" })}>Add NUMB</button>
      {/* <button onClick={addName}>Add Name</button> */}
    </div>
  );
}

function App() {
  const [count, setCount] = useState<number>(0);
  const addvalue = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ marginTop: "-350px" }}>
      <p>{count}</p>
      <button onClick={addvalue}>add</button>
      <NameList />
    </div>
  );
}

export default App;
