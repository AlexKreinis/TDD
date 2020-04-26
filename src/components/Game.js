import React, { useState } from "react";
import "./Game.css";

const Game = ({ initTable }) => {
  const [table, setTable] = useState(initTable);

  const board = table.map((row, rowi) => {
    return (
      <div className="row" key={rowi}>
        {row.map((col, coli) => {
          return (
            <div
              key={coli}
              className={`board-piece ${col === "f" ? "selected" : null}`}
              onClick={() => handleSwap(rowi, coli)}
              data-hook={`${rowi}-${coli}`}
            >
              {col}
            </div>
          );
        })}
      </div>
    );
  });
  const handleSwap = (row, col) => {
    let tempTable = [...table];
    if (tempTable[row][col] === "e") {
      tempTable[row][col] = "f";
    } else {
      tempTable[row][col] = "e";
    }
    setTable(tempTable);
  };
  const copyArr = () => {
    return table.map((row) => {
      return row.map((col) => {
        return col;
      });
    });
  };
  const handleTurn = () => {
    let copiedArr = copyArr();
    for (let row = 0; row < table.length; row++) {
      for (let col = 0; col < table[row].length; col++) {
        if (countNeighbours(row, col) === 3 && table[row][col] === "e") {
          copiedArr[row][col] = "f";
        }
        if (countNeighbours(row, col) < 2 && table[row][col] === "f") {
          copiedArr[row][col] = "e";
        }
        if (countNeighbours(row, col) > 3 && table[row][col] === "f") {
          copiedArr[row][col] = "e";
        }
      }
    }
    setTable([...copiedArr]);
  };

  const countNeighbours = (row, col) => {
    let tempRow = row - 1;
    let tempCol = col - 1;
    let numOfNeighbours = 0;
    let rows = tempRow + 3;
    let cols = tempCol + 3;
    for (let i = tempRow; i < rows; i++) {
      for (let j = tempCol; j < cols; j++) {
        if (
          i < 0 ||
          j < 0 ||
          (i === row && j === col) ||
          i > table.length - 1 ||
          j > table[0].length - 1
        ) {
          continue;
        } else {
          if (table[i][j] === "f") {
            numOfNeighbours++;
          }
        }
      }
    }
    return numOfNeighbours;
  };

  return (
    <div>
      <h1>game of life</h1>
      <div className="gameboard">{board}</div>
      <button onClick={handleTurn} className="next-button">
        Next
      </button>
    </div>
  );
};

export default Game;
