/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let maxCandies = Math.max(...candies)

    for (let i = 0; i < candies.length; i++){
        if (candies[i] + extraCandies >= maxCandies){
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};