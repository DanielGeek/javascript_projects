function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

const arr1 = [3,2,1];
const arr2 = [9,10,1];

console.log("new merged sorted array ", mergeSortedArrays(arr1, arr2));
