/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle.length === 0) return 0;
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) j++;
        if (j === needle.length) return i;
    }
    return -1;
}


const haystack = "sadbutsad", needle = "sad";

console.log(strStr(haystack, needle));