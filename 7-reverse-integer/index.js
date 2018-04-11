/**
Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

−2,147,483,648 (−231) through 2,147,483,647 (231 − 1)

*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNeg = false;
  if(x < 0) {
    x = -x;
    isNeg = true;
  }
  x = x.toString();
  x = x.split('').reverse().join('');
  x = isNeg ? `-${x}` : x;
  if(( parseInt(x) < -2147483648) || (2147483647 < parseInt(x))) {
    x = 0;
  };
  return parseInt(x);
};

console.log(reverse(1534236469));
