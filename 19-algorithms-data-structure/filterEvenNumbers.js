function filterEvenNumbers(numbers) {

    return numbers.filter(num => num % 2 === 0);
}

console.log("Even numbers: ", filterEvenNumbers([1, 2, 3, 11, 12]));
