import './App.css';
import React,{useEffect,useState} from "react";
import SudokuComp from './SudokuComp';
import {solver,validity} from './funcSudoku.mjs';
function App() {
    var _board = [
        ["6", "8", "5", ".", "3", ".", "4", ".", "7"],
        [".", ".", ".", "8", ".", ".", ".", "2", "."],
        [".", "1", ".", "4", ".", ".", "5", ".", "."],
        [".", "9", ".", "3", ".", ".", ".", ".", "5"],
        [".", "4", ".", ".", ".", ".", "6", ".", "."],
        ["5", ".", "8", ".", ".", "4", ".", "3", "."],
        ["9", "2", "6", ".", "7", "8", "3", ".", "."],
        ["8", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "3", ".", ".", ".", ".", "1", "9"],
      ];
    var init_rows = _board;
    var [rows, setRows] = useState(init_rows);
    var [isSending, setIsSending] = useState(false)

    const solveSudoku = () => {
        setIsSending(!isSending)
    }
    // const newSudoku = () => {
    //     setIsSending(isSending)
    // }
    useEffect(() => {
      // solver(init_rows);
      var res = solver(_board);
      console.log('result_rows',res)
    },[isSending]);


  return (
    <div className="App">
      <h1 className='header'>SOLVE SUDOKU</h1>
      <p className="subheading">Using backtracking and via Brute Force search</p>
      {/* <button className="button" onClick={newSudoku}>
        <p>New Game</p>
      </button> */}
      {isSending==false ? <SudokuComp property={_board}/>: <SudokuComp property={rows}/>}
        <p className="subheading">Solve the Sudoku Puzzle</p>
        <button className="button" onClick={solveSudoku}>
        {isSending==false ? <p>Click to Solve !</p>:<p>Click to Reset</p>}
        </button>
    </div>
  );
}
export default App;