import React from "react";
import ReactDOM from "react-dom/client";
import CustomHooks from "./customHooks";
// import App from "./App";
// import Callback from "./callback";
import "./index.css";
import Useeffect from "./useEffect";
import UseRef from "./useRef";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Callback /> */}
    {/* <Useeffect /> */}
    {/* <UseRef /> */}
    <CustomHooks />
  </React.StrictMode>
);
