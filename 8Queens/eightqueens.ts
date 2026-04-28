let solutionCounter: number = 0;

console.log("Start");
EightQueens([]);
console.log("End, number of solutions: ", solutionCounter);

function EightQueens(table: number[]) {

    const y = table.length;
    if (y == 8) {
        if (TableIsValid(table)) {
            PrintTable(table);
            solutionCounter++;
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

function PrintTable(table: number[]) {
    for (let x: number = 0; x < 8; x++) {
        {
            let row: string = "";
            for (let y: number = 0; y < 8; y++) {
                if (table[x] == y)
                    if ((x + y) % 2 == 1)
                        row = row + "Q█";
                    else row = row + "Q▒";
                else
                    if ((x + y) % 2 == 1)
                        row = row + "██";
                    else row = row + "▒▒";

            }
            console.log(row);
        }

    }
    console.log("---")
}