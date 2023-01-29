/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    let numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}

const nums = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(nums));