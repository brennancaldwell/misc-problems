/*
Given head, the head of a linked list, determine if the linked list has a
cycle in it.
*/

var hasCycle = function(head) {
  if (head === null || head.next === null) { return false; }
  let slow = head, fast = head;
  while (fast !== null) {
      slow = slow.next;
      if (fast.next !== null) {
          fast = fast.next.next;
      } else {
          fast = fast.next;
      }
      if (slow === fast) {
          return true;
      }
  }
  return false;
};