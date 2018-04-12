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
  var re = /\d/;
  var res = [];
  str = str.split('');
  for(var i = 0; i < str.length; i++) {
    if(res.length == 0) {
      if(str[i] === '+' || str[i] === '-' || re.test(str[i])) {
        res.push(str[i]);
      }
    } else {
      if(re.test(str[i])) {
        res.push(str[i]);
      } else if (str[i-1] === '+' || str[i-1] == '-') {
        res = [];
        break;
      } else {
        break;
      }
    }
  };
  if (res.length === 0) return 0;
  if (res.length === 1 && !re.test(res[0])) return 0;
  // return res;
  return parseInt(res.join(''));
};

console.log(myAtoi(''));
console.log(myAtoi('-'));
console.log(myAtoi('+'));
console.log(myAtoi('++'));
console.log(myAtoi('+-2'));
console.log(myAtoi('1'));
console.log(myAtoi('2147483648'));
console.log(myAtoi('-0012a42'));
console.log(myAtoi('12312312+-'));
console.log(myAtoi('*&^12312312'));
console.log(myAtoi('+1231#$#2312'));
