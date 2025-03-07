import { useState } from "react";
import "./index.css";
import Board from "./Board";

const initialBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
function App() {
  const [board, setBoard] = useState(initialBoard);

  const handleCellChange = (row, col, value) => {
    const newBoard = [...board];
    newBoard[row][col] = parseInt(value) || 0;
    setBoard(newBoard);
  };

  const handleCheckSolution = () => {
    if (isValidSudoku(board)) {
      alert("Congrats! The solution is correct!");
    } else {
      alert("There are mistakes in the solution.");
    }
  };

  const isValidSudoku = () => {};

  return (
    <div className="app">
      <h1>Sudoku Game</h1>
      <Board board={board} onCellChange={handleCellChange} />
      <button onClick={handleCheckSolution}>Check Solution</button>
    </div>
  );
}

export default App;
