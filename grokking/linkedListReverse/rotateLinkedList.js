/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R

Given the head of a Singly LinkedList and a number ‘k’, rotate the
LinkedList to the right by ‘k’ nodes.
*/

function rotate(head, rotations) {
  let i = 0, current = head, oldHead = head;

  while (i < rotations) {
    current = current.next;
    if (current === null) current = head;
    i++;
  }

  head = current;

  while (true) {
    if (current.next === null) current.next = oldHead;
    if (current.next === head) break;
    current = current.next;
  }

  current.next === null;

  return head;
}