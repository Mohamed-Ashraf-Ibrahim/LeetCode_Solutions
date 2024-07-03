/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;
    for (let num of nums){
        let remainder  = num % 3;
        
        remainder === 1 ? operations += 1 : remainder === 2 ? operations += 1 : operations += 0
    }
    return operations;
};