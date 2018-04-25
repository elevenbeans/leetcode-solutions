/**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (num < 1 || num > 3999) {
    return false;
  }
  var aArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var rArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var rNumber = '';
  for(var i = 0; i < aArray.length; i++) {
    while(num >= aArray[i]) {
      rNumber += rArray[i];
      num -= aArray[i];
    }
  }
  return rNumber;
};

console.log(intToRoman(0));
console.log(intToRoman(1));
console.log(intToRoman(14));
console.log(intToRoman(233));
console.log(intToRoman(1233));
console.log(intToRoman(2233));
