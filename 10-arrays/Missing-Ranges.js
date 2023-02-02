/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let res = [];
    let pre = lower - 1;
    nums.push(upper + 1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - pre > 1) {
            if (pre + 1 === nums[i] - 1) {
                res.push(`${pre + 1}`);
            } else {
                res.push(`${pre + 1}->${nums[i] - 1}`);
            }
        }
        pre = nums[i];
    }
    return res;
};