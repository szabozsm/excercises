import { useState } from 'react'

import './App.css'

function App() {
  const [solutionCounter, setSolutionCounter] = useState<number>(0);
  const [tables, setTables] = useState<number[][]>([]);
  const [selectedSolution, setSelectedSolution] = useState<number>(-1);

function EightQueens(table: number[]) {

    const y = table.length;
    
       
    if (y == 8) {
        if (TableIsValid(table)) {
            setTables(prev => [...prev, table]);
       
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
        <div className="solution-counter">
          
        </div>
     
        <button
          type="button"
          className="counter"
          onClick={() => {setSolutionCounter(0); setTables([]); setSelectedSolution(-1); EightQueens([])}}
        >
          Place Queens
        </button>
     

<div className="solution-counter">
          Solutions: {solutionCounter}
        </div>
           <div>
          {tables.length > 0 && (
            <div>
              <h3>Solutions:</h3>
              <div className="solution-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '5px' }}>
                {tables.map((_, index) => (
                  <button
                    key={index}
                    className={`solution-button ${selectedSolution === index ? 'active' : ''}`}
                    onClick={() => setSelectedSolution(index)}
                  >
                    Solution {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

           {selectedSolution >= 0 && selectedSolution < tables.length && (
          <div className="chess-board">
            {Array.from({ length: 8 }, (_, row) => (
              <div key={row} className="row">
                {Array.from({ length: 8 }, (_, col) => (
                  <div key={col} className={`square ${(row + col) % 2 === 0 ? 'white' : 'black'}`} style={{ color: (row + col) % 2 === 0 ? 'black' : 'white' }}>
                    {tables[selectedSolution][row] === col && '♛'}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

      </section>

  
      <section id="spacer"></section>
    </>
  )
}


export default App
