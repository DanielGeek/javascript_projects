/**
 * @param {number} n
 */
class TicTacToe {
    constructor(n) {
      this.board = new Array(n);
      for (let i = 0; i < n; i++) {
        this.board[i] = new Array(n).fill(0);
      }
      this.n = n;
    }
  
    move(row, col, player) {
      this.board[row][col] = player;
      let isWin = false;
  
      // Check row
      for (let i = 0; i < this.n; i++) {
        if (this.board[row][i] !== player) {
          break;
        }
        if (i === this.n - 1) {
          isWin = true;
        }
      }
  
      // Check column
      if (!isWin) {
        for (let i = 0; i < this.n; i++) {
          if (this.board[i][col] !== player) {
            break;
          }
          if (i === this.n - 1) {
            isWin = true;
          }
        }
      }
  
      // Check main diagonal
      if (!isWin && row === col) {
        for (let i = 0; i < this.n; i++) {
          if (this.board[i][i] !== player) {
            break;
          }
          if (i === this.n - 1) {
            isWin = true;
          }
        }
      }
  
      // Check anti-diagonal
      if (!isWin && row + col === this.n - 1) {
        for (let i = 0; i < this.n; i++) {
          if (this.board[i][this.n - i - 1] !== player) {
            break;
          }
          if (i === this.n - 1) {
            isWin = true;
          }
        }
      }
  
      if (isWin) {
        return player;
      }
      return 0;
    }
  }
  