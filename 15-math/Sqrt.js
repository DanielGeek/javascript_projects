/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    if (x === 1) return 1;
    
    let left = 0, right = x;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) return mid;
        if (mid * mid < x) left = mid + 1;
        else right = mid;
    }
};
