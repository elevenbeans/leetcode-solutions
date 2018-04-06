/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
   this.val = val;
   this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  var carry = 0; // carry存放进位
  var result = new ListNode(), temp = new ListNode();
  result.next = temp; // 主要是想用 result 记录结果链表的表头
  var v1 = l1, v2 = l2;
  while(v1 || v2) {
    var sum = (v1 ? v1.val : 0) + (v2 ? v2.val : 0) + carry;
    carry = sum > 9 ? 1 : 0;
    temp.val = sum - carry * 10; // 某一位上最终值
    temp.next = (v1 ? v1.next : null) ||
      (v2 ? v2.next : null) ? (new ListNode()) : (carry==1?(new ListNode(1)) : null);
    temp = temp.next ? temp.next : null;
    v1 = v1 ? (v1.next ? v1.next : null) : null;
    v2 = v2 ? (v2.next ? v2.next : null) : null;
  };
  return result.next;
};
