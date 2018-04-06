/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var tempArr = [];
  var repeatIndex = 0;
  var repeatLenArr = [];

  if(!s) return 0;

  s = s.split('');
  for(var i = 0; i < s.length; i++) {
    if(tempArr.indexOf(s[i]) == -1) {
      repeatLenArr.push(i + 1 - repeatIndex);
    } else {
      repeatIndex = Math.max(repeatIndex, tempArr.lastIndexOf(s[i]) + 1);
      repeatLenArr.push(i + 1 - repeatIndex);
    }
    tempArr.push(s[i]);
  }
  return Math.max(...repeatLenArr);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbabcdb'));
console.log(lengthOfLongestSubstring('abba'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
