function isValidSudoku(board) {
    // Initialize sets for rows, columns, and sub-boxes
    let rows = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()];
    let cols = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()];
    let boxes = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()];

    // Iterate through each cell of the board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let curr = board[i][j];

            // Check if the current cell is empty or already in the row, column, or sub-box
            if (curr !== '.') {
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[i].has(curr) || cols[j].has(curr) || boxes[boxIndex].has(curr)) {
                    return false;
                }

                // Add the current digit to the corresponding row, column, and sub-box sets
                rows[i].add(curr);
                cols[j].add(curr);
                boxes[boxIndex].add(curr);
            }
        }
    }
    return true;
}

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));