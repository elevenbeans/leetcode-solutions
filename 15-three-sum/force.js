/**
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var index = 0;
  var res = [];
  for(var i = index; i < nums.length - 2; i++) {
    for(var j = i + 1; j > i, j < nums.length - 1; j++) {
      for(var k = j + 1; k > j, k < nums.length; k++) {
        if(nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  res = res.map(item => item.sort().toString());
  res = [...new Set(res)];
  res = res.map(item => item.split(',').map(it => parseInt(it)));
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
