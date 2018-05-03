/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var strNum = strs.length;
  var minLength = Math.min(...strs.map(str => str.length));
  var i = 0;
  var res = '';
  if (!strs[0]) return '';
  while (i < minLength) {
    var pre = strs[0].charAt(i);
    for(var j = 0; j < strNum; j++) {
      if ([...strs[j]][i] !== pre) {
        return strs[0].substr(0, i);
      };
    }
    i++;
    pre = strs[0].indexOf(i);
  }
  return strs[0].substr(0, i);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix([]));

//
