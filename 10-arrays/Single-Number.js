/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    // create a variable to store the single number
    let singleNum = 0;
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // use bitwise XOR to find the single number
        singleNum ^= nums[i];
    }
    // return the single number
    return singleNum;
}

const nums = [4,1,2,1,2];

console.log(singleNumber(nums));