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

// manacher
var longestPalindrome = function(s) {
  var newStr = s.split('').join('#');
  var len = 1, maxLen = 0, centerIndex = 0;
  newStr = `~${newStr}#`;
  // j 为目标串的中间点
  for (var j = 1, lenj = newStr.length - 1; j < lenj; j++, len = 1) {
    while (newStr[j + len] === newStr[j - len]) {
      len++;
    }
    if (len > maxLen) { // 如果找到更长的
      maxLen = len; // 保留当前长度
      centerIndex = j; // 保留中点
    }
  }
  var result = newStr.slice(centerIndex - maxLen + 1, centerIndex + maxLen).replace(/#/g, '').replace(/~/g, '');
  return result;
};

console.log(longestPalindrome('bb')); // bb
console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('babad')); // aba bab
console.log(longestPalindrome('abcba')); // bcb
console.log(longestPalindrome('abcda')); // a
console.log(longestPalindrome('abadd')); // aba
