/**
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var arr = [];
  var reslut;
  arr = [...nums1, ...nums2];
  arr = arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0){
    reslut = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  } else {
    reslut = arr[arr.length / 2 - 1 / 2]
  }
  return reslut;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
