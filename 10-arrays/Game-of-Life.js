/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
    const m = board.length;
    const n = board[0].length;
    
    // Define a helper function to count live neighbors
    function countLiveNeighbors(i, j) {
      let count = 0;
      for (let x = Math.max(i-1, 0); x <= Math.min(i+1, m-1); x++) {
        for (let y = Math.max(j-1, 0); y <= Math.min(j+1, n-1); y++) {
          if (x !== i || y !== j) {
            count += board[x][y] & 1;
          }
        }
      }
      return count;
    }
    
    // Update each cell in-place
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const liveNeighbors = countLiveNeighbors(i, j);
        if (board[i][j] === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
          board[i][j] = 3; // 01b -> 11b
        }
        if (board[i][j] === 0 && liveNeighbors === 3) {
          board[i][j] = 2; // 00b -> 10b
        }
      }
    }
    
    // Convert the updated values to the final state
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        board[i][j] >>= 1;
      }
    }
  }
  