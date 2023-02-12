/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    const stack = [];
    let num = 0;
    let sign = '+';
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (/[0-9]/.test(char)) {
        num = num * 10 + Number(char);
      }
      if (/[+\-*/]/.test(char) || i === s.length - 1) {
        if (sign === '+') {
          stack.push(num);
        } else if (sign === '-') {
          stack.push(-num);
        } else if (sign === '*') {
          stack.push(stack.pop() * num);
        } else if (sign === '/') {
          stack.push(Math.trunc(stack.pop() / num));
        }
        num = 0;
        sign = char;
      }
    }
    return stack.reduce((acc, val) => acc + val, 0);
  }
  