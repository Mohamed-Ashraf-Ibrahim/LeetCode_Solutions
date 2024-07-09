/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // create a variable to store = '[.]'
    // loop over the address
    // push the var
    let replaced = '';

    for (let i = 0; i < address.length; i++){
        address[i] === '.' ? replaced += '[.]' : replaced += address[i]
    }
    return replaced;
};