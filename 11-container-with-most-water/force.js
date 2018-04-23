/**
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // var
  var area = 0;
  var temp = height.filter(item => item > 0);
  if (temp.length < 2) {
    return 0;
  }
  var temp = height.map( (item, index) => {
    for(var i = 0; i < index; i++) {
      var h = Math.min(item, height[i]);
      area = Math.max(area, h*(index-i));
    }
    return area;
  });
  return Math.floor(Math.max(...temp));
};

console.log(maxArea([1, 3, 6, 9, 5, 2]));
console.log(maxArea([1, 2]));
console.log(maxArea([0, 2]));
console.log(maxArea([1, 2, 4, 3]));
