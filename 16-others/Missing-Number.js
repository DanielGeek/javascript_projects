/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var n = nums.length;
    var sum = (n * (n + 1)) / 2;
    for (var i = 0; i < n; i++) {
        sum -= nums[i];
    }
    return sum;
};
