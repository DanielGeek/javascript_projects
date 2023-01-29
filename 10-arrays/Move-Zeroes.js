/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let nonZeroPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[nonZeroPointer]] = [nums[nonZeroPointer], nums[i]];
            nonZeroPointer++;
        }
    }
}

const nums = [0,1,0,3,12];

console.log(moveZeroes[nums]);