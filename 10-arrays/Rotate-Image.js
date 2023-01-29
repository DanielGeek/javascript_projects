/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    // transpose matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // reverse each row
    matrix.forEach(row => row.reverse());
    return matrix;
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(rotate(matrix));