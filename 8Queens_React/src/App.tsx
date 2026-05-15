import { useState } from 'react'

import './App.css'


type Board = string[][];

function App() {
  const [solutionCounter, setSolutionCounter] = useState<number>(0);
  const [board, setBoard] = useState<Board>(Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => '' as string)))

   

function tableToBoard(table: number[]) 
{
  
   setBoard(() => {
    const newBoard = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => '' as string));//prev.map(row => [...row]); 
  for (let x: number = 0; x < 8; x++) 
        {
          if (table[x] !==-1)
          newBoard[x][table[x]] = 'Q'; 
        }

    
    return newBoard; 
  })

}

function EightQueens(table: number[]) {

    const y = table.length;
    
       
    if (y == 8) {
  //          setTimeout(() => {
  //   tableToBoard(table);
  // }, 500); // Delays the update by 500ms  

        if (TableIsValid(table)) {
            tableToBoard(table);
       
            setSolutionCounter(prev => prev + 1);
        }
        return;
    }

    for (let x: number = 0; x < 8; x++) {
        if (!table.includes(x)) {
            EightQueens([...table, x]);
        }
    }
}

function TableIsValid(table: number[]): boolean {
    for (let x1: number = 0; x1 < 8; x1++) {
        {
            for (let x2: number = x1+1; x2 < 8; x2++) {
                if (Math.abs(table[x1] - table[x2]) == Math.abs(x1 - x2))
                    return false;

            }

        }

    }
    return true;
}


  return (
    <>
      <section id="center">
        
        <div className="chess-board">
          {Array.from({ length: 8 }, (_, row) => (
            <div key={row} className="row">
              {Array.from({ length: 8 }, (_, col) => (
                <div key={col} className={`square ${(row + col) % 2 === 0 ? 'white' : 'black'}`} style={{ color: (row + col) % 2 === 0 ? 'black' : 'white' }}>
                  {board[row][col] === 'Q' && '♛'}
                </div>
              ))}
            </div>
          ))}
        </div>

<div className="solution-counter">
          Solutions: {solutionCounter}
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => {setSolutionCounter(0); EightQueens([])}}
        >
          Place Queen
        </button>
      </section>

  
      <section id="spacer"></section>
    </>
  )
}


export default App
