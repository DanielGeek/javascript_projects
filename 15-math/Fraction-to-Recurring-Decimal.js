/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator == 0) return "0";
    let res = "";
    if ((numerator > 0) != (denominator > 0)) res += "-";
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    res += Math.floor(numerator / denominator);
    numerator %= denominator;
    if (numerator === 0) return res;
    res += ".";
    let map = {};
    while (numerator !== 0) {
        map[numerator] = res.length;
        numerator *= 10;
        res += Math.floor(numerator / denominator);
        numerator %= denominator;
        if (map[numerator] !== undefined) {
            let index = map[numerator];
            res = res.substring(0, index) + "(" + res.substring(index) + ")";
            break;
        }
    }
    return res;
};
