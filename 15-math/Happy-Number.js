/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = n;
  
    do {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    } while (slow !== fast);
  
    return slow === 1;
};

function getNext(n) {
    let result = 0;
    while (n !== 0) {
        let digit = n % 10;
        result += digit * digit;
        n = Math.floor(n / 10);
    }
    return result;
}
