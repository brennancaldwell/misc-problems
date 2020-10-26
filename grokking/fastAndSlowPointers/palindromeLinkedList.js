/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/JERG3q0p912

Given the head of a Singly LinkedList, write a method to check if the
LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be
in the original form once the algorithm is finished. The algorithm should
have O(N) time complexity where ‘N’ is the number of nodes in the
LinkedList.

*/

const palindromeLinkedList = (head) => {
  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversedSecond = reverse(slow);
  let copyReversed = reversedSecond;

  while (head !== null && reversedSecond !== null) {
    if (head.value !== reversedSecond.value) {
      break;
    }
    head = head.next;
    reversedSecond = reversedSecond.next;
  }

  reverse(copyReversed);

  if (head === null || reversedSecond === null) {
    return true;
  }

  return false;
}

const reverse = (head) => {
  let prev = null, next = null, current = head;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

/*
O(n) Time
O(1) Space

Other solution I had used O(log n) space.
*/