/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    let low = 1;
    let high = nums.length - 1;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      let count = 0;
      for (let num of nums) {
        if (num <= mid) {
          count++;
        }
      }
      if (count > mid) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }
  