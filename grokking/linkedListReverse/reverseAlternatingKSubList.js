/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG

Reverse Alternating K Sublist

Given the head of a LinkedList and a number ‘k’, reverse every alternating
‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements,
reverse it too.
*/

function reverseAlternateKElements(head, k) {
  if (k <= 1 || head === null) return head;

  let current = head,
  next = null,
  prev = null,
  endPrevList = null,
  currListHead = null,
  i = k;

  while (current !== null) {
    while (i > 0 && current !== null) {
      if (i === k) currListHead = current;
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i--;
    }

    if (currListHead === head) head = prev;

    if (current !== null) {
      if (endPrevList !== null) endPrevList.next = prev;
      currListHead.next = current;
      prev = null;
      i = k;

      while (i > 0 && current !== null) {
        if (i === 1) endPrevList = current;
        current = current.next;
        i--;
      }

      i = k;
    }
  }

  return head;
}

/*

Grokking solution code:

function reverseAlternateKElementsSublist(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head, previous = null;

  while (true) {
    const lastNodeOfPreviousPart = previous;
    const lastNodeOfSubList = current;
    let next = null, i = 0;

    while (current !== null && i < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    if (lastNodeOfPreviousPart !== null) {
      lastNodeOfPreviousPart.next = previous;
    } else {
      head = previous;
    }

    lastNodeOfSubList.next = current;

    i = 0;

    while (current !== null && i < k) {
      previous = current;
      current = current.next;
      i += 1;
    }

    if (current === null) {
      break;
    }
  }
  return head;
}
*/