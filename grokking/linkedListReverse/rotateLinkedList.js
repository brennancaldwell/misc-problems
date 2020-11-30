/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R

Given the head of a Singly LinkedList and a number ‘k’, rotate the
LinkedList to the right by ‘k’ nodes.
*/

function rotate(head, rotations) {
  if (rotations <= 0 || head === null || head.next === null) return head;

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

/*
function rotate(head, rotations) {
  if (head === null || head.next === null || rotations <= 0) {
    return head;
  }

  let lastNode = head;
  let listLength = 1;

  while (lastNode.next !== null) {
    lastNode = lastNode.next;
    listLength++;
  }

  lastNode.next = head;
  rotations %= listLength;
  let skipLength = listLength - rotations;
  let lastNodeOfRotatedList = head;

  for (let i = 0; i < skipLength - 1; i++) {
    lastNodeOfRotatedList = lastNodeOfRotatedList.next;
  }

  head = lastNodeOfRotatedList.next;
  lastNodeOfRotatedList.next = null;

  return head;
}
*/