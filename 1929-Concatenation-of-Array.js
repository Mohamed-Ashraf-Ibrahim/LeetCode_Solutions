/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = [];

    for (let i = 0; i < 2 * n; i++){
        ans.push(nums[i % n]);
    }
    return ans;
};