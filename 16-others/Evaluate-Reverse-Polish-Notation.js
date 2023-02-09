/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (tokens[i] === '-') {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(num1 - num2);
        } else if (tokens[i] === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (tokens[i] === '/') {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(Math.trunc(num1 / num2));
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack[0];
};
