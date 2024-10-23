import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "3rem",
          bottom: "3rem",
        }}
      >
        <div>
          <Button color="darkblue" setColor={setColor} />
        </div>
        <div>
          <Button color="darkred" setColor={setColor} />
        </div>
        <div>
          <Button color="darkgreen" setColor={setColor} />
        </div>
        <div>
          <Button color="#313131" setColor={setColor} />
        </div>
        <div>
          <Button color=" pink" setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

function Button({ color, setColor }) {
  return (
    <>
      <button
        onClick={() => {
          setColor(color);
        }}
      >
        {color}
      </button>
    </>
  );
}

export default App;
