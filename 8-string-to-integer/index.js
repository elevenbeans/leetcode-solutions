/**
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // to do
  var patt = /^\d|+|-$/;
  return (patt.test(str) || !str )? 0 : parseInt(str);
};

console.log(myAtoi('12312312'));
