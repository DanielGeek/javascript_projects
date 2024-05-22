function sortByKey(arr, key) {
    return arr.sort((a, b) => a[key] - b[key]);
}

// Ejemplo de uso
const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 35 },
    { name: "David", age: null },
    { name: "Eve", age: 30 }
];

console.log(sortByKey(data, 'age'));
