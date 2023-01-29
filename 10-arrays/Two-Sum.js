/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i);
    }
}

const nums = [2,7,11,15], target = 9;

console.log(twoSum(nums, target));
