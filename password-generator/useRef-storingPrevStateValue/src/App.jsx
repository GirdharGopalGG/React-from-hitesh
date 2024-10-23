import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Ref");
  // const [inputValue, setInputValue] = useState(name);
  const prevName = useRef("");

  // useEffect(() => {
  //   prevName.current = name;
  // }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            prevName.current = name;
          }
        }}
      />
      <div>
        <h1>Current Name: {name}</h1>
      </div>
      <div>
        <h1>Previous Name: {prevName.current}</h1>
      </div>
    </div>
  );
}

export default App;
