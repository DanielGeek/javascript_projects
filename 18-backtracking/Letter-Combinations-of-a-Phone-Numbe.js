/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const result = [];
    
    const dfs = (combination, nextDigits) => {
        if (nextDigits.length === 0) {
            result.push(combination);
            return;
        }
        
        const digit = nextDigits[0];
        const letters = map[digit];
        
        for (let i = 0; i < letters.length; i++) {
            dfs(combination + letters[i], nextDigits.slice(1));
        }
    };
    
    dfs('', digits.split(''));
    
    return result;
};