/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    
    let result = [];
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;
    
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // Traverse right
        for (let j = colBegin; j <= colEnd; j ++) {
            result.push(matrix[rowBegin][j]);
        }
        rowBegin++;
        
        // Traverse down
        for (let j = rowBegin; j <= rowEnd; j ++) {
            result.push(matrix[j][colEnd]);
        }
        colEnd--;
        
        if (rowBegin <= rowEnd) {
            // Traverse left
            for (let j = colEnd; j >= colBegin; j --) {
                result.push(matrix[rowEnd][j]);
            }
        }
        rowEnd--;
        
        if (colBegin <= colEnd) {
            // Traverse up
            for (let j = rowEnd; j >= rowBegin; j --) {
                result.push(matrix[j][colBegin]);
            }
        }
        colBegin ++;
    }
    
    return result;
};
