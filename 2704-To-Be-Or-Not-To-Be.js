/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const originalVal = val;

    return {
        toBe: (newVal) => {
            if (newVal !== originalVal) {
                throw new Error('Not Equal')
            } else return true
        },
        notToBe: (newVal) => {
            if (newVal === originalVal) {
                throw new Error('Equal')
            } else return true
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */