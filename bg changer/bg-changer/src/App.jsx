import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "1rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
