var exist = function(board, word) {
    if (board.length === 0 || board[0].length === 0) return false;
    let m = board.length, n = board[0].length;
    
    function dfs(i, j, k) {
        if (!(0 <= i && i < m && 0 <= j && j < n) || board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;
        let temp = board[i][j];
        board[i][j] = '#';
        if (dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1)) return true;
        board[i][j] = temp;
        return false;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
