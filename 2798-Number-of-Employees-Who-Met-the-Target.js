/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let result = 0;

    for (let i = 0; i < hours.length; i++){
       hours[i] >= target ? result++ : null;
    }
    return result;
};