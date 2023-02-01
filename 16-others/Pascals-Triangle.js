/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    let triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let currRow = [1];
        let prevRow = triangle[i - 1];
        for (let j = 1; j < i; j++) {
            currRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currRow.push(1);
        triangle.push(currRow);
    }
    return triangle;
};
