function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    } else {
        return number*factorial(number-1);
    }
}

const number = 3;

console.log(`Factorial of ${number} is`, factorial(number));
