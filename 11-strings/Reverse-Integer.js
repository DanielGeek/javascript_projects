/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let reversed = 0;
    while(x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    reversed *= sign;
    if(reversed < Math.pow(-2,31) || reversed > Math.pow(2,31) - 1) return 0;
    return reversed;
};

  
  const x = 123;
  
  console.log(reverse(x));