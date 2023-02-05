/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let result = [-1, -1];
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        result[0] = mid;
        end = mid - 1;
      }
    }
    start = 0; end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        result[1] = mid;
        start = mid + 1;
      }
    }
    return result;
  };
  