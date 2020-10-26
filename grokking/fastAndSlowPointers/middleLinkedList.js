/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/3j5GD3EQMGM

Given the head of a Singly LinkedList, write a method to return the middle
node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second
middle node.
*/

const findMiddleOfLinkedList = (head) => {
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

/*
Time O(n)
Space O(1)
*/