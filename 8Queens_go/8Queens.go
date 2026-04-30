package main

import (
	"fmt"
	"math"
	"slices"
)

var solutionCounter int = 0

func main() {
	fmt.Println("start")
	tbl := [8]int{-1, -1, -1, -1, -1, -1, -1, -1}
	EightQueens(tbl, 0)
	fmt.Println("end", solutionCounter)
}

func EightQueens(table [8]int, y int) {

	if y == 8 {
		if TableIsValid(table) {
			PrintTable(table)
			solutionCounter++
		}
		return
	}

	for x := 0; x < 8; x++ {
		if !slices.Contains(table[:], x) {
			table2 := table
			table2[y] = x
			EightQueens(table2, y+1)
		}
	}

}

func PrintTable(table [8]int) {
	for x := 0; x < 8; x++ {
		row := ""
		for y := 0; y < 8; y++ {
			if table[x] == y {
				if (x+y)%2 == 1 {
					row = row + "Q█"
				} else {
					row = row + "Q▒"
				}

			} else {
				if (x+y)%2 == 1 {
					row = row + "██"
				} else {
					row = row + "▒▒"
				}
			}

		}
		fmt.Println(row)
	}
	fmt.Println("---")
}

func TableIsValid(table [8]int) bool {
	for x1 := 0; x1 < 8; x1++ {
		{
			for x2 := x1 + 1; x2 < 8; x2++ {
				if math.Abs(float64(table[x1]-table[x2])) == math.Abs(float64(x1-x2)) {
					return false
				}
			}
		}
	}
	return true
}