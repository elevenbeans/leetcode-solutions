/**
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var aArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var rArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var res = 0;

  for (var i = 0; i < rArray.length; i++) { // M C X I
    while (s.match('^' + rArray[i])) {
      res += aArray[i];
      s = s.replace(rArray[i], '');
    }
  }

  return res;
};

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('IX'));
