import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>PASSWORD GENERATOR</h1>
      <Component />
    </div>
  );
}

function Component() {
  const [length, setLength] = useState(8);
  const [char, isChar] = useState(false);
  const [num, isNum] = useState(false);
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    const character = "[{]}:;/*-+.";
    const number = "1234567890";

    if (char) str += character;
    if (num) str += number;

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, num, char]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, char]);

  return (
    <div>
      <div>
        <input type="text" value={password} ref={inputRef} readOnly />
        <button
          onClick={() => {
            inputRef.current.select();
            window.navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>
      </div>
      <div>
        <label htmlFor="rrr">Length</label>
        <input
          type="range"
          min={6}
          max={30}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
          name="rrr"
          id=""
        />
        {length}
      </div>
      <div>
        <label htmlFor="char">Char</label>
        <input
          type="checkbox"
          onChange={() => {
            isChar((prev) => !prev);
          }}
          name="char"
          id=""
        />
      </div>
      <div>
        Number
        <input
          type="checkbox"
          onChange={() => {
            isNum((prev) => !prev);
          }}
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default App;
