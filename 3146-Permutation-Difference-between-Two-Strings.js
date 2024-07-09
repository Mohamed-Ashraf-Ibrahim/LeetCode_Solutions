/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let count = 0;

    for (let i = 0; i < s.length; i++){
        count += Math.abs(s.indexOf(s[i]) - t.indexOf(s[i]))
    }
    return count;
};