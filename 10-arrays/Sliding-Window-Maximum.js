/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    const queue = []; // stores the indices of nums in the current window
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      if (queue.length && queue[0] <= i - k) {
        queue.shift(); // remove the leftmost index if it's outside the window
      }
      while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
        queue.pop(); // remove the rightmost index if its corresponding number is smaller than the current number
      }
      queue.push(i); // add the current index to the right end of the queue
      if (i >= k - 1) {
        result.push(nums[queue[0]]); // the leftmost index of the queue gives the maximum element in the window
      }
    }
    return result;
  }
  