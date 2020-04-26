import React from "react";
import "./App.css";
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
    <div className="App">
      <Game initTable={table} />
    </div>
  );
}

export default App;
