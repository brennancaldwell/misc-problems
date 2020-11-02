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

/*
Grokking bases its solution on the fact that the one test case uses
a linked list with incrementing values. As such, rather than testing
against values, we test against a counter:

const reverse = (head, p, q) => {
  if (p === q) return head;
  let current = head, previous = null, i = 0;

  while (current !== null && i < p - 1) {
    previous = current;
    current = current.next;
    i++;
  }

  const endPreList = previous;
  const endSubList = current;

  let next = null;
  i = 0;

  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++
  }

  if (endPreList !== null) {
    endPreList.next = previous;
  } else {
    head = previous;
  }

  endSubList.next = current;

  return head;
}
*/