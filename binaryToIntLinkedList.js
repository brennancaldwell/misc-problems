/* 1290. Convert Binary Number in a Linked List to Integer
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.


Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

Example 3:
Input: head = [1]
Output: 1

Example 4:
Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880

Example 5:
Input: head = [0,0]
Output: 0

Constraints:
 - The Linked List is not empty.
 - Number of nodes will not exceed 30.
 - Each node's value is either 0 or 1.

*/

const getDecimalValue = (head) => {
  result = head.val;

  while (head.next) {
    result = (result << 1) | head.next.val;
    head = head.next;
  }

  return result;
}

/*
Third solution above includes bit manipulation
Negligible Time/Space difference from the above
we shift the result to the left by one bit, then
append to the end whichever value appears next

Second solution:
Time: O(n) // runtime and memory negligible difference compared to below
Space: O(1)
var getDecimalValue = function(head) {
  let result = head.val;

  while (head.next !== null) {
      result = result * 2 + head.next.val;
      head = head.next;
  }

  return result;
};
Naive solution below:
O(n) Time (76ms, 73.48% faster)
O(n) Space (38.6, less than 41.95%)
var getDecimalValue = function(head) {
  let binary = '', power = 0, result = 0, node = head;

  while (node !== null) {
      binary = binary + node.val;
      node = node.next;
  }

  for (let i = binary.length - 1; i >= 0; i--) {
      result += Number(binary[i]) * Math.pow(2, power);
      power++;
  }

  return result;
};
*/