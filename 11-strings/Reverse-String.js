/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
}

const s = ["h","e","l","l","o"];

console.log(reverseString(s));

