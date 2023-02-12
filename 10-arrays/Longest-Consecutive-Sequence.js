/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;
    for (let num of set) {
      if (!set.has(num - 1)) { // Only start from the smallest number in a sequence
        let current = 1;
        while (set.has(num + current)) {
          current++;
        }
        longest = Math.max(longest, current);
      }
    }
    return longest;
  }
  