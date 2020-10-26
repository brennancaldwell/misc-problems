/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/YQJ4mr7yOrW

Rearrange a Linked List

Given the head of a Singly LinkedList, write a method to modify the
LinkedList such that the nodes from the second half of the LinkedList are
inserted alternately to the nodes from the first half in reverse order. So
if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method
should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList
should be modified in-place.
*/

const reorder = (head) => {
  if (head === null || head.next === null) return head;

  let slow = head, fast = head;
  while (fast !== null && fast.head !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let rList = reverse(slow), list = head, currentL = head;

  while (rList !== null) {
    let tempL = currentL.next, tempR = rList.next;
    if (list === head) {
      list.next = rList;
      list = list.next;
    } else {
      list.next = currentL;
      list.next.next = rList;
      list = list.next.next;
    }
    currentL = tempL;
    rList = tempR;
  }

  return head;
}

const reverse = (head) => {
  let prev = null, current = head, next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

/*
My solution quite close to what is was written, which I'm rewriting below:

let reorder = (head) => {
  if (head === null || head.next === null) return;

  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  headSecondHalf = reverse(slow);
  headFirstHalf = head;

  while (headFirstHalf !== null && headSecondHalf !== null) {
    temp = headFirstHalf.next;
    headFirstHalfNext = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }

  if (headFirstHalf !== null) {
    headFirstHalf.next = null;
  }

  return head;
}
*/