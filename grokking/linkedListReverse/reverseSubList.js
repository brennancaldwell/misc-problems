/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2

Reverse a Sublist

Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the
LinkedList from position ‘p’ to ‘q’.
*/

function reverseSubList(head, p, q) {
  if (p ===  q) return head;

  let prev = null,
  current = head,
  next = null,
  endPreList = null,
  endSubList = null;

  while (current.value !== p) {
    if (current.next.value === p) {
      endPreList = current;
    }
    current = current.next;
  }

  endSubList = current;

  do {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  } while (prev.value !== q);

  if (endPreList !== null) {
    endPreList.next = prev;
  } else {
    head = prev;
  }

  endSubList.next = current;

  return head;
}