/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    let sign = 1;
    if (dividend < 0) {
        sign = -sign;
        dividend = -dividend;
    }
    if (divisor < 0) {
        sign = -sign;
        divisor = -divisor;
    }

    let result = 0;
    while (dividend >= divisor) {
        let temp = divisor, multiple = 1;
        while (dividend >= temp) {
            dividend -= temp;
            result += multiple;
            temp <<= 1;
            multiple <<= 1;
        }
    }

    result *= sign;

    if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else if (result < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }

    return result;
}
