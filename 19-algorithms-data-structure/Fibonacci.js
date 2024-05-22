// function Fibonacci(number) {
//     const fibo = [0, 1];

//     for(i = 2; i <= number; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }

//     return fibo[number];
// }

function Fibonacci(num) {
    if(num <= 1) return num;

    return Fibonacci(num-1) + Fibonacci(num-2);

}

const num = 0;
console.log(`Fibo of ${num} is: `, Fibonacci(num));
