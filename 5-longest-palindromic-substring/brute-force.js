/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"
Output: "bab"

Note: "aba" is also a valid answer.
*/

/**
/**
 * @param {string} s
 * @return {string}
 */

// Brute-force
var longestPalindrome = function(s) {
  var subStrArr = [];
  var maxIndex = 0;
  var maxLen = 1;
  function getSubStr (len, str) {
    var res = [];
    for(var i = 0; i <= str.length - len; i++) {
      res.push(str.substring(i, i + len));
    };
    return res;
  }
  if(s.length > 1000) return '';
  for(var i = 1; i <= s.length; i++) {
    subStrArr = [...subStrArr, ...getSubStr(i, s)]
  }
  subStrArr = subStrArr.filter(item => item == item.split('').reverse().join(''));
  subStrArr.map((item, index) => {
    if(item.length > maxLen && item.length !== s.length) {
      maxIndex = index;
    }
  });
  return subStrArr[maxIndex];
};

console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('babad')); // aba bab
console.log(longestPalindrome('abcba')); // bcb
console.log(longestPalindrome('abcda')); // a
console.log(longestPalindrome('abadd')); // aba
