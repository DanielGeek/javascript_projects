/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const result = [];
    
    const backtrack = (start, subset) => {
      result.push(subset.slice());
      
      for (let i = start; i < nums.length; i++) {
        subset.push(nums[i]);
        backtrack(i + 1, subset);
        subset.pop();
      }
    };
    
    backtrack(0, []);
    return result;
  };
  