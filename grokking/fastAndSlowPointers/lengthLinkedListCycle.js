/*
Grokking: https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D

Given the head of a LinkedList with a cycle, find the length of the cycle.
*/

const findCycle = (head) => {
  let slow = head, fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
    if (fast) fast = fast.next;
    if (slow === fast) return findCycleLength(slow);
  }

  return 0;
}

const findCycleLength = (slow) => {
  let current = slow, length = 0;
  while (true) {
    current = current.next;
    length++;
    if (current === slow) break;
  }
  return length;
}