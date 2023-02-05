/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function swap(nums, a, b) {
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  }
  
  function partition(nums, left, right, pivotIndex) {
    let pivot = nums[pivotIndex];
    // 1. move pivot to end
    swap(nums, pivotIndex, right);
    let storeIndex = left;
  
    // 2. move all smaller elements to the left
    for (let i = left; i <= right; i++) {
      if (nums[i] < pivot) {
        swap(nums, storeIndex, i);
        storeIndex++;
      }
    }
  
    // 3. move pivot to its final place
    swap(nums, storeIndex, right);
  
    return storeIndex;
  }
  
  function quickselect(nums, left, right, kSmallest) {
    /*
    Returns the k-th smallest element of list within left..right.
    */
  
    if (left === right) // If the list contains only one element,
      return nums[left];  // return that element
  
    // select a random pivot_index
    let pivotIndex = left + Math.floor(Math.random() * (right - left + 1)); 
    
    pivotIndex = partition(nums, left, right, pivotIndex);
  
    // the pivot is on (N - k)th smallest position
    if (kSmallest === pivotIndex)
      return nums[kSmallest];
    // go left side
    else if (kSmallest < pivotIndex)
      return quickselect(nums, left, pivotIndex - 1, kSmallest);
    // go right side
    return quickselect(nums, pivotIndex + 1, right, kSmallest);
  }
  
  function findKthLargest(nums, k) {
    let size = nums.length;
    // kth largest is (N - k)th smallest
    return quickselect(nums, 0, size - 1, size - k);
  }
  