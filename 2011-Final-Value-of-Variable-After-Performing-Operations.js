/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let value = 0;
    for (let i = 0; i < operations.length; i++) {
        operations[i] === "X++" || operations[i] === "++X" ? value++ : value--;
    }
    return value;
};
