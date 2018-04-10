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
  var t = s.split('').join('#');
  var c = 1, e = 0, cs = 0;
  t = `~${t}#`;
  // j 为目标串的中间点
  for (var j = 1, lenj = t.length - 1; j < lenj; j++, c = 1) {
    while (t[j + c] === t[j - c]) {
      c++;
    }
    if (c > e) { // 如果找到更长的
      e = c; // 保留当前长度
      cs = j; // 保留中点
    }
  }
  var result = t.slice(cs - e + 1, cs + e).replace(/#/g, '').replace(/~/g, '');
  return result;
};

// console.log(longestPalindrome('bb')); // bb
 console.log(longestPalindrome('cbbd')); // bb
// console.log(longestPalindrome('babad')); // aba bab
// console.log(longestPalindrome('abcba')); // bcb
// console.log(longestPalindrome('abcda')); // a
// console.log(longestPalindrome('abadd')); // aba
