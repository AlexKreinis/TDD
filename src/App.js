import React from "react";
import Game from "./components/Game.js";
function App() {
  const table = [
    ["e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e"],
    ["e", "e", "e", "e", "e", "e"],
  ];

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Game initTable={table} />
    </div>
  );
}

export default App;
