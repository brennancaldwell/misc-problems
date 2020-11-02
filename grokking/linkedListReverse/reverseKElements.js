/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR

Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized
sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements,
reverse it too.
*/

function reverseKElements(head, k) {
  let endPrevList = null,
  currListHead = head,
  i = k,
  current = head,
  prev = null,
  next = null;

  while (current !== null) {
    // reset currentListHead if we're at the start of a new K cycle
    if (i === k) currentListHead = current;
    // perform normal linked list reversal operations
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    // decrement counter
    i--;

    // if we're at the end of a k cycle
    if (i === 0) {
      // connect current sublist head to end of previous list
      if (endPrevList !== null) endPrevList.next = prev;
      // reassign the head if we're on the first sublist
      if (currListHead === head) head = prev;
      prev = null;
      // redefine the endPrevList variable to what had once been the
      // previous list's head
      endPrevList = currListHead;
      // start k counter over
      i = k;
    }
  }

  // connect previous list to head of final sublist
  endPrevList.next = prev;

  return head;
}