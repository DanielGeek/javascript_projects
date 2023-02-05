/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let bucket = [];
    for (let i = 0; i < nums.length + 1; i++) {
        bucket[i] = [];
    }
    for (let [key, value] of map.entries()) {
        bucket[value].push(key);
    }
    let result = [];
    for (let i = nums.length; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result = result.concat(bucket[i]);
        }
    }
    return result.slice(0, k);
};
