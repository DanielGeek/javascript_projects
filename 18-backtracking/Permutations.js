/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    backtrack(nums, [], res);
    return res;
};

var backtrack = function(nums, temp, res) {
    if (temp.length === nums.length) {
        res.push([...temp]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) continue;
        temp.push(nums[i]);
        backtrack(nums, temp, res);
        temp.pop();
    }
};
