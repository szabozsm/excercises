import { useState } from 'react'

import './App.css'

function App(): JSX.Element {
  const [solutionCounter, setSolutionCounter] = useState<number>(0);
  const [tables, setTables] = useState<number[][]>([]);
  const [selectedSolution, setSelectedSolution] = useState<number>(-1);
  const [hoveredQueen, setHoveredQueen] = useState<number>(-1);

  function isUnderAttack(row: number, col: number, queenRow: number): boolean {
    const queenCol: number = tables[selectedSolution][queenRow];
    // Same row
    if (row === queenRow) return true;
    // Same column
    if (col === queenCol) return true;
    // Same diagonal
    if (Math.abs(row - queenRow) === Math.abs(col - queenCol)) return true;
    return false;
  }

  function EightQueens(table: number[]): void {

    const y: number = table.length;


    if (y === 8) {
      if (TableIsValid(table)) {
        setTables((prev: number[][]) => [...prev, table]);

        setSolutionCounter((prev: number): number => prev + 1);
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
        for (let x2: number = x1 + 1; x2 < 8; x2++) {
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
          onClick={() => { setSolutionCounter(0); setTables([]); setSelectedSolution(-1); EightQueens([]) }}
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
                {tables.map((_: number[], index: number) => (
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
            {Array.from({ length: 8 }, (_: unknown, row: number) => (
              <div key={row} className="row">
                {Array.from({ length: 8 }, (_: unknown, col: number) => {
                  const hasQueen: boolean = tables[selectedSolution][row] === col;
                  const isAttacked: boolean = hoveredQueen >= 0 && isUnderAttack(row, col, hoveredQueen);
                  const baseIsWhite: boolean = (row + col) % 2 === 0;
                  const backgroundColor: string = isAttacked ? (baseIsWhite ? '#f0b5b5' : '#b56363') : (baseIsWhite ? '#f0d9b5' : '#b58863');
                  const textColor: string = isAttacked ? (baseIsWhite ? 'black' : 'black') : (baseIsWhite ? 'black' : 'black');

                  return (
                    <div
                      key={col}
                      className={`square ${baseIsWhite}`}
                      style={{
                        backgroundColor,
                        color: textColor,
                        cursor: hasQueen ? 'pointer' : 'default'
                      }}
                      onMouseEnter={() => hasQueen && setHoveredQueen(row)}
                      onMouseLeave={() => setHoveredQueen(-1)}
                    >
                      {hasQueen && '♛'}
                    </div>
                  );
                })}
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
