/**
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */


var isMatch = function(s, p) {
  // p match entire s
  var patt = new RegExp(p);
  var result = s.match(patt);
  // return patt.test(s);
  return result ? result[0] === s : false;

};
console.log(isMatch('a','.*.'));
console.log(isMatch('aa','a'));
console.log(isMatch('aab','c*a*b'));
console.log(isMatch('asdf','a*f'));
console.log(isMatch('asdf','as.f'));
console.log(isMatch('asdfew','as.f'));
console.log(isMatch('asddfghjk','a*.f*'));
