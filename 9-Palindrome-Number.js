/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const numStr = x.toString();
  const reversedStr = numStr.split(\\).reverse().join(\\);
   return numStr === reversedStr ? true : false;
  
};